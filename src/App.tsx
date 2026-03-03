import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>
      
      <header>
        <div className="container">
          <h1>Ahmet Yilmaz - Kisisel Portfolyo</h1>
          <nav aria-label="Ana navigasyon">
            <ul>
              <li><a href="#hakkimda">Hakkimda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">Iletisim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="container">
        
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src="https://via.placeholder.com/150" alt="Muhammed Eren Aydin'in vesikalik fotografi" />
            <figcaption>Muhammed Eren Aydin</figcaption>
          </figure>
          <p>Merhaba! Web geliştirme dünyasına ilk adımımı atıyorum. Öğrenmeye ve gelişmeye açık bir yazılım meraklısıyım.</p>
          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>HTML5 (Semantik)</li>
            <li>CSS3 / Responsive Tasarım</li>
            <li>JavaScript & TypeScript</li>
            <li>React & Vite</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>E-Ticaret Sitesi</h3>
            <p>Modern ve kullanıcı dostu bir alışveriş platformu prototipi. Sepet yönetimi ve ürün filtreleme özellikleri barındırır.</p>
            <p><strong>Teknolojiler:</strong> React, Node.js, MongoDB</p>
            <img src="https://via.placeholder.com/400x200" alt="E-ticaret sitesi urun listeleme ekrani ekran goruntusu" />
          </article>
          
          <article>
            <h3>Blog Uygulamasi</h3>
            <p>Kullanıcıların makale okuyabildiği ve kendi yazılarını paylaşabildiği içerik platformu.</p>
            <p><strong>Teknolojiler:</strong> Next.js, Tailwind CSS</p>
            <img src="https://via.placeholder.com/400x200" alt="Blog uygulamasi anasayfa ve makale goruntuleme arayuzu" />
          </article>
        </section>

        <section id="iletisim">
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
                <small id="name-error" className="error-msg" role="alert"></small>
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
                <small id="email-error" className="error-msg" role="alert"></small>
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
                <small id="subject-error" className="error-msg" role="alert"></small>
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
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>

      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Muhammed Eren Aydin. Tum haklari saklidir.</p>
        </div>
      </footer>
    </>
  )
}

export default App
