import './styles/tokens.css'
import './App.css'

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
              <li><a href="#hakkimda">Hakkimda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">Iletisim</a></li>
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
              />
              <figcaption>Muhammed Eren Aydın</figcaption>
            </figure>
            <div>
              <p><strong>Ad Soyad:</strong> Muhammed Eren Aydın</p>
              <p><strong>Ogrenci No:</strong> 230541034</p>
              <p>
                <strong>E-posta:</strong>{' '}
                <a href="mailto:230541034@firat.edu.tr">230541034@firat.edu.tr</a>
              </p>
              <p>Merhaba! Web geliştirme dünyasına ilk adımımı atıyorum. Öğrenmeye ve gelişmeye açık bir yazılım meraklısıyım.</p>
              <h3>Kullandigim Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Vite</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="container">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="E-ticaret sitesi urun listeleme ekrani ekran goruntusu" />
              <h3>E-Ticaret Sitesi</h3>
              <p>Modern ve kullanıcı dostu bir alışveriş platformu prototipi. Sepet yönetimi ve ürün filtreleme özellikleri barındırır.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>
            
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Blog uygulamasi anasayfa ve makale goruntuleme arayuzu" />
              <h3>Blog Uygulamasi</h3>
              <p>Kullanıcıların makale okuyabildiği ve kendi yazılarını paylaşabildiği içerik platformu.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Hava durumu uygulamasi arayuzu" />
              <h3>Hava Durumu Uygulamasi</h3>
              <p>OpenWeather API ile anlık hava durumu bilgisi sunan uygulama.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim" className="container">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
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
  )
}

export default App
