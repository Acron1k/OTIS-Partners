import { motion } from 'framer-motion';

const productTypes = [
    {
        title: "Подвесная",
        description: "Раздвижная система на верхнем рельсе. Без нижнего направляющего — идеальный ровный пол.",
        image: "/images/partitions/partition-1.jpg"
    },
    {
        title: "Опорная",
        description: "Раздвижная система с нижним треком. Надёжная конструкция для частого использования.",
        image: "/images/partitions/partition-2.jpg"
    },
    {
        title: "Угловая",
        description: "Раздвижные системы для угловых проёмов. Компактное решение для сложных планировок.",
        image: "/images/partitions/partition-3.jpg"
    },
    {
        title: "Стационарная",
        description: "Статичная перегородка. Максимальная звукоизоляция и надёжность.",
        image: "/images/partitions/partition-4.jpg"
    },
    {
        title: "Складная «книжка»",
        description: "Система складных дверей для максимального раскрытия проёма.",
        image: "/images/partitions/partition-5.jpg"
    },
    {
        title: "Двери-купе для шкафов",
        description: "Вдвижные двери для гардеробных и шкафов-купе. Плавный ход и бесшумность.",
        image: "/images/partitions/partition-6.jpg"
    },
];

export default function ProductsExpertise() {
    return (
        <section id="products-expertise" className="py-16 md:py-24 bg-sand-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-primary mb-2 block">Продукция</span>
                        <h2 className="text-3xl md:text-6xl font-black text-charcoal leading-tight">
                            Типы <br className="hidden md:block" /><span className="text-primary italic">перегородок.</span>
                        </h2>
                    </div>
                    <p className="text-charcoal/50 text-sm md:text-base max-w-sm font-medium leading-relaxed">
                        Раздвижные системы для любых задач: от зонирования помещений до шкафов-купе.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {productTypes.map((type, index) => (
                        <motion.div
                            key={type.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 md:mb-6 relative shadow-lg">
                                <img
                                    src={type.image}
                                    alt={type.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                            </div>
                            <h3 className="text-base font-bold text-charcoal mb-2 uppercase tracking-wider">{type.title}</h3>
                            <p className="text-charcoal/60 text-xs md:text-sm leading-relaxed">
                                {type.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
