import { Link } from 'react-router-dom';
import { FileText, UserCheck, ShoppingBag, Lock, Scale } from 'lucide-react';
import './TermsofServices.css';

function TermsOfService() {
  return (
    <div className="terms-page-wrapper position-relative">
      <div className="container py-5">
        
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-muted">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Terms of Service</li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold letter-spacing-wide mb-3">TERMS OF SERVICE</h2>
          <p className="text-muted">Please read these terms carefully before using the LUXÉ website or placing an order.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            
            {/* Policy Sections */}
            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <FileText size={20} className="text-dark" /> 
                1. Acceptance of Terms
              </h5>
              <p className="text-muted line-height-large mb-0">
                By browsing, accessing, or placing an order on LUXÉ, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should discontinue use of our website immediately.
              </p>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <UserCheck size={20} className="text-dark" /> 
                2. Use of Our Website
              </h5>
              <p className="text-muted line-height-large mb-0">
                You must be at least 18 years old or visiting under the supervision of a parent or guardian. You agree not to reproduce, duplicate, copy, sell, or exploit any portion of our clothing designs, website imagery, or content without express written permission from LUXÉ.
              </p>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <ShoppingBag size={20} className="text-dark" /> 
                3. Products & Pricing
              </h5>
              <p className="text-muted line-height-large mb-3">
                We make every effort to display product colors, fabrics, and descriptions as accurately as possible. However, actual colors may vary slightly depending on your device's screen settings.
              </p>
              <ul className="text-muted line-height-large ps-3 mb-0">
                <li className="mb-2">All prices are listed in PKR (Pakistani Rupees) and are inclusive of applicable sales taxes unless stated otherwise.</li>
                <li className="mb-2">LUXÉ reserves the right to modify prices or discontinue items at any time without prior notice.</li>
                <li>In the event of a pricing error on an order, we reserve the right to cancel the order and issue a full refund.</li>
              </ul>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <Lock size={20} className="text-dark" /> 
                4. Intellectual Property
              </h5>
              <p className="text-muted line-height-large mb-0">
                All branding, logos, design assets, website layout, and product photography displayed on LUXÉ are the exclusive property of LUXÉ. Unauthorized use or copying of these materials is strictly prohibited.
              </p>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <Scale size={20} className="text-dark" /> 
                5. Governing Law
              </h5>
              <p className="text-muted line-height-large mb-0">
                These terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the local courts.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default TermsOfService;