import "./styles/tokens.css";
import "./App.css";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Git",
] as const;

type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  image: {
    src: string;
    alt: string;
  };
};

const PROJECTS: readonly Project[] = [
  {
    title: "AY-KA Hali Saha Otomasyonu",
    description:
      "Kullanıcıların tarih, saat, saha türü ve boyutuna göre boş sahaları arayıp anında rezervasyon yapmasını sağlayan otomasyon sistemi. Personel; sahaları ekleyip kapasite, fiyat ve müsaitlik saatlerini güncelleyebilir.",
    tags: ["C#", "DevExpress", "SQL Server", "WinForms"],
    image: {
      src: "https://via.placeholder.com/400x200",
      alt: "AY-KA Hali Saha Otomasyonu proje gorseli (temsilidir)",
    },
  },
  {
    title: "AI-Powered Academic Text Data Generator",
    description:
      "Cohere API ile belirli bir konu hakkında uzun, detaylı ve özgün Türkçe akademik metinler üreten Python uygulaması. Metin analizi, model eğitimi ve test süreçleri için sentetik veri üretir ve çıktıları .txt olarak kaydeder.",
    tags: ["Python", "Cohere API", "NLP", "AI", "Data Generation"],
    image: {
      src: "https://via.placeholder.com/400x200",
      alt: "AI-Powered Academic Text Data Generator proje gorseli (temsilidir)",
    },
  },
  {
    title: "PDF Translator",
    description:
      "İngilizce veya farklı dillerdeki PDF dosyalarını otomatik olarak Türkçeye çeviren Python uygulaması. LibreTranslate ile metni parçalara böler, çevirir ve birleştirir.",
    tags: ["Python", "LibreTranslate", "PDF Processing", "Translation"],
    image: {
      src: "https://via.placeholder.com/400x200",
      alt: "PDF Translator proje gorseli (temsilidir)",
    },
  },
  {
    title: "Nesne Tabanlı Programlama – Haftalık Projeler",
    description:
      "OOP kavramlarını pekiştirmek için hazırlanmış haftalık proje koleksiyonu. Araba Yarışı, Flappy Bird, XOX, Mayın Tarlası, Hangman ve Quiz Show gibi oyunlar içerir.",
    tags: ["C#", ".NET Framework", "Windows Forms", "OOP"],
    image: {
      src: "https://via.placeholder.com/400x200",
      alt: "Nesne Tabanlı Programlama haftalik projeler koleksiyonu gorseli (temsilidir)",
    },
  },
  {
    title: "QuickLIT",
    description:
      "Scopus API ile akademik literatür araması ve Cohere AI ile PDF özetleme sunan, araştırmacılar için zaman kazandıran yapay zekâ destekli platform. Flask tabanlı arayüz ve Node.js servisleri ile çalışır.",
    tags: ["Python", "Flask", "Node.js", "Scopus API", "Cohere AI", "Firebase"],
    image: {
      src: "https://via.placeholder.com/400x200",
      alt: "QuickLIT proje gorseli (temsilidir)",
    },
  },
  {
    title: "Data Structures & Algorithms – Learning Repository",
    description:
      "Veri yapıları ve algoritmalar üzerine öğrendiğim konuları; arama, sıralama ve temel algoritmalarla birlikte düzenli olarak paylaştığım çalışma deposu.",
    tags: ["Python", "Java", "Data Structures", "Algorithms"],
    image: {
      src: "https://via.placeholder.com/400x200",
      alt: "Data Structures & Algorithms learning repository gorseli (temsilidir)",
    },
  },
  {
    title: "Veri Bilimi ve Makine Öğrenmesi Kampı",
    description:
      "Teorik bilgiyi pratik uygulamalarla birleştiren kapsamlı öğrenme deposu. Unsupervised Learning, model kaydetme/yayınlama ve Kaggle projeleri gibi konuları içerir.",
    tags: [
      "Python",
      "Machine Learning",
      "Data Science",
      "Unsupervised Learning",
      "Kaggle",
      "Model Deployment",
    ],
    image: {
      src: "https://via.placeholder.com/400x200",
      alt: "Veri Bilimi ve Makine Ogrenmesi kampi depo gorseli (temsilidir)",
    },
  },
  {
    title: "Akademik Makale Özetleme Sistemi – AI Powered",
    description:
      "PDF.js ile tarayıcıda PDF okuma, kaynakça temizleme, Türkçe→İngilizce çeviri ve iki farklı LLM ile kısa/uzun özet üretimi sunan sistem. Gerçek zamanlı özet görüntüleme (SSE) ve modern UI içerir.",
    tags: [
      "Python",
      "FastAPI",
      "JavaScript",
      "PDF.js",
      "OpenRouter API",
      "LLM",
      "Streaming",
    ],
    image: {
      src: "https://via.placeholder.com/400x200",
      alt: "Akademik Makale Ozetleme Sistemi proje gorseli (temsilidir)",
    },
  },
] as const;

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <img
        src={project.image.src}
        alt={project.image.alt}
        loading="lazy"
        decoding="async"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul
        className="skill-tags"
        role="list"
        aria-label={`${project.title} teknolojileri`}
      >
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <div className="container header-inner">
          <span className="site-title">Muhammed Eren Aydın</span>
          <nav aria-label="Ana navigasyon">
            <ul>
              <li>
                <a href="#hakkimda">Hakkimda</a>
              </li>
              <li>
                <a href="#projeler">Projeler</a>
              </li>
              <li>
                <a href="#iletisim">Iletisim</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="container">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img
                src="https://www.muhammederenaydın.com/home%20page/profile.jpg"
                alt="Muhammed Eren Aydın'ın profil fotografi"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Muhammed Eren Aydın</figcaption>
            </figure>
            <div>
              <p>
                <strong>Ad Soyad:</strong> Muhammed Eren Aydın
              </p>
              <p>
                <strong>Ogrenci No:</strong> 230541034
              </p>
              <p>
                <strong>E-posta:</strong>{" "}
                <a href="mailto:230541034@firat.edu.tr">
                  230541034@firat.edu.tr
                </a>
              </p>
              <p>
                Merhaba! Web geliştirme dünyasına ilk adımımı atıyorum.
                Öğrenmeye ve gelişmeye açık bir yazılım meraklısıyım.
              </p>
              <h3>Kullandigim Teknolojiler</h3>
              <ul
                className="skill-tags"
                role="list"
                aria-label="Beceri etiketleri"
              >
                {SKILLS.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="container">
          <h2>Projelerim</h2>
          <div className="project-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <p className="projects-more">
            Daha fazlası:{" "}
            <a
              href="https://www.muhammederenaydın.com/projects"
              target="_blank"
              rel="noreferrer"
            >
              Projeler sayfam
            </a>
          </p>
        </section>

        <section id="iletisim" className="container">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small
                  id="name-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small
                  id="email-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small
                  id="subject-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small
                  id="message-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Muhammed Eren Aydın. Tum haklari saklidir.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
