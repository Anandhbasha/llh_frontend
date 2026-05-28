import "../VisionMission.css"

const VisionMission = () => {
  return (
    <section className="vm-section">
      <h2 className="vm-title">Vision • Mission • Values</h2>

      <div className="vm-container">
        
        {/* Vision */}
        <div className="vm-card">
          <h3>🌟 Vision</h3>
          <p>
            To become the most trusted online destination for quality
            products with excellent customer experience.
          </p>
        </div>

        {/* Mission */}
        <div className="vm-card">
          <h3>🎯 Mission</h3>
          <p>
            We aim to provide affordable, high-quality products with
            fast delivery and friendly customer support.
          </p>
        </div>

        {/* Values */}
        <div className="vm-card">
          <h3>💎 Values</h3>

          <ul>
            <li>Customer First</li>
            <li>Quality Products</li>
            <li>Trust & Transparency</li>
            <li>Innovation</li>
            <li>Fast Service</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;