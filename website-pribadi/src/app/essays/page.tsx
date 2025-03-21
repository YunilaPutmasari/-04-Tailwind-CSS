export default function Essays() {
    const articles = [
      { title: "Belajar Next.js", description: "Panduan dasar untuk memulai Next.js.", url: "/essays/nextjs" },
      { title: "Mengenal React", description: "Konsep dasar React dan cara menggunakannya.", url: "/essays/react" },
      { title: "Optimasi Website", description: "Cara meningkatkan performa website dengan teknik modern.", url: "/essays/optimization" },
    ];
  
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 px-8">
      <div className="max-w-4xl mx-auto mt-16 px-8">
        <h1 className="text-3xl font-bold text-zinc-800 mb-6">Daftar Esai</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <a
                href={article.url}
                className="mt-4 inline-block text-teal-500 hover:text-teal-600 font-medium"
              >
                Baca Selengkapnya →
              </a>
           
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }
  