import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '../contact-form';

describe('contactFormSchema', () => {
  it('should validate correct form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+79991234567',
      company: 'Test Company',
      partnerType: 'agency',
      message: 'Test message about partnership',
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject missing required name', () => {
    const invalidData = {
      name: '',
      email: 'john@example.com',
      phone: '+79991234567',
      message: 'Test message',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('имя');
    }
  });

  it('should reject invalid email format', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      phone: '+79991234567',
      message: 'Test message',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('email');
    }
  });

  it('should reject phone with invalid format', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123',
      message: 'Test message',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('телефон');
    }
  });

  it('should accept optional company field', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+79991234567',
      partnerType: 'agency' as const,
      message: 'Test message',
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should require partnerType', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+79991234567',
      message: 'Test message',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should require message with minimum length', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+79991234567',
      partnerType: 'agency',
      message: 'short',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
