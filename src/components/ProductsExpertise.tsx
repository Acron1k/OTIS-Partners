import { motion } from 'framer-motion';

const productTypes = [
    {
        title: "Раздвижные",
        description: "Элегантное решение для зонирования. Плавный ход, беспороговые системы и тонкий профиль.",
        image: "/images/partitions/partition-4.jpg"
    },
    {
        title: "Складные",
        description: "Системы «книжка» или «гармошка» для максимального раскрытия проема.",
        image: "/images/partitions/partition-5.jpg"
    },
    {
        title: "Стационарные",
        description: "Классическое разделение пространства с максимальной звукоизоляцией.",
        image: "/images/partitions/partition-6.jpg"
    },
    {
        title: "Стеклянные",
        description: "Цельностеклянные конструкции для ощущения абсолютного простора.",
        image: "/images/partitions/partition-7.jpg"
    }
];

export default function ProductsExpertise() {
    return (
        <section id="products-expertise" className="py-24 bg-sand-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-3 block">Экспертиза</span>
                        <h2 className="text-4xl md:text-6xl font-black text-charcoal leading-tight">
                            Решения для <br /><span className="text-primary italic">любых задач.</span>
                        </h2>
                    </div>
                    <p className="text-charcoal/50 max-w-sm font-medium leading-relaxed pb-2">
                        От минималистичных лофт-перегородок до сложных трансформируемых систем.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productTypes.map((type, index) => (
                        <motion.div
                            key={type.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative shadow-lg">
                                <img
                                    src={type.image}
                                    alt={type.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3 uppercase tracking-widest text-sm">{type.title}</h3>
                            <p className="text-charcoal/60 text-sm leading-relaxed">
                                {type.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
