import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#3f51b5' }}>三木</h1>

      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          在这里我会分享各类技术栈所遇到问题与解决方案，带你了解最新的技术栈以及实际开发中如何应用，并希望我的开发经历对你有所启发。
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#ff5722' }}>技能专长</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '1.1rem' }}>
          <li><strong>Three.js:</strong> 我擅长使用 Three.js 构建 3D 场景和动画效果。</li>
          <li><strong>前端框架:</strong> 熟练掌握 React、Vue 等现代前端框架，构建高效、交互性强的应用。</li>
          <li><strong>服务器开发:</strong> 我也有一定的服务器开发经验，能够搭建和管理 Web 服务。</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#ff5722' }}>兴趣爱好</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          我喜欢不断探索前沿技术，特别是在 3D 可视化、虚拟现实 (VR) 和游戏开发领域。除此之外，我也喜欢在空闲时间阅读技术书籍，并参与开源项目，为社区贡献力量。
        </p>
      </section>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          style={{
            backgroundColor: '#3f51b5',
            color: '#fff',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>
          查看我的 GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
