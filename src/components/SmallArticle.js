import Link from 'next/link';

const SmallArticle = () => {
  const articles = [
    {
  id: 1,
  title: "🧊 بتوصّل منتجات لمسافات بعيدة؟ ازاي تضمن تفضل بنفس الجودة؟",
  image: "/images/1.png",
  excerpt: "نقل المنتجات لمسافات طويلة ممكن يعرّضها لفقدان جودتها. في المقال ده هنعرف إزاي تحافظ على جودة شحنتك لأطول وقت ممكن.",
  content: "سواء كنت بتوصّل منتجات غذائية، طبية أو حتى حلويات، الحفاظ على الجودة أثناء الشحن لمسافات طويلة بيحتاج اهتمام خاص. أهم نقطة هي درجة الحرارة. استخدام صندوق تبريد معزول بيساعد في تثبيت الحرارة لفترات طويلة، وبيمنع التلف أو الذوبان. كمان مهم تختار الحجم المناسب، وتراعي مدة التوصيل ونوع المنتج. لما تهتم بالتفاصيل دي، منتجاتك هتوصل لعملائك وكأنها لسه طالعة من المصنع!"
},
{
  id: 2,
  title: "❄️ صندوق التبريد اللي بتستخدمه بيحافظ على درجة الحرارة فعلاً؟",
  image: "/images/2.png",
  excerpt: "مش كل صندوق تبريد بيؤدي نفس الأداء. تعالى نعرف إزاي تتأكد إن الصندوق فعلاً بيعزل الحرارة.",
  content: "كتير من الناس بتستخدم صناديق تبريد من غير ما تتأكد من فعاليتها. الصندوق الجيد لازم يكون مصنوع من مواد عازلة زي البولي يوريثين، ويكون الغطاء محكم الغلق علشان ميحصلش تسرب للهواء. كمان مهم تختبره قبل الاستخدام: حط فيه تلج وشوف هيفضل قد إيه. لو التلج داب بسرعة، يبقى لازم تعيد التفكير. صندوق التبريد الصح مش رفاهية، ده ضرورة لحماية منتجاتك!"
},
{
  id: 3,
  title: "🚚 ليه الصندوق المعزول أهم من الصندوق العادي في الشحن؟",
  image: "/images/3.png",
  excerpt: "الفرق بين صندوق معزول وصندوق عادي ممكن يكون سبب في إن الشحنة توصل سليمة أو تبوظ.",
  content: "الصندوق العادي مش بيمنع تسرب الحرارة، فلو بتشحن حاجة بتحتاج تبريد أو تسخين، هتفقد جودتها في الطريق. أما الصندوق المعزول فبيحافظ على درجة الحرارة الداخلية لفترة طويلة، مهما كان الجو حواليه. ده معناه إنك هتقدر توصل منتجاتك بأمان، من غير خوف من التلف أو الشكاوى. استثمارك في صندوق معزول هو استثمار في جودة خدمتك ورضا عميلك."
}
  ];

  return (
    <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
          <div>
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
            </div>
          </div>
          <div className="p-4 text-center mt-auto">
            <Link href={`/articles/${article.id}`}>
              <button className="bg-blue-900 text-white px-4 py-2 rounded w-full hover:bg-blue-800">
                اقرأ المقال
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallArticle;
