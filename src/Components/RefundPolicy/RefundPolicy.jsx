import { Link } from 'react-router-dom';
import { RotateCcw, CheckCircle, ShieldAlert, DollarSign } from 'lucide-react';
import './RefundPolicy.css';

function RefundPolicy() {
  return (
    <div className="refund-page-wrapper position-relative">
      <div className="container py-5">
        
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-muted">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Return & Refund Policy</li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold letter-spacing-wide mb-3">RETURN & REFUND POLICY</h2>
          <p className="text-muted">We want you to love your purchase. Here is everything you need to know about returns and refunds.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            
            {/* Policy Sections */}
            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <RotateCcw size={20} className="text-dark" /> 
                7-Day Hassle-Free Returns
              </h5>
              <p className="text-muted line-height-large mb-0">
                If you are not completely satisfied with your purchase, you may request a return or exchange within <strong>7 days</strong> of delivery. Items must be unused, unwashed, unworn, and returned with all original tags and packaging intact.
              </p>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <CheckCircle size={20} className="text-dark" /> 
                Eligibility Requirements
              </h5>
              <ul className="text-muted line-height-large ps-3 mb-0">
                <li className="mb-2">Proof of purchase (order number or invoice) is required for all returns.</li>
                <li className="mb-2">Unstitched suit collections must have all fabric pieces complete and uncut.</li>
                <li className="mb-2">Items bought during clearance or final sale events are non-refundable unless defective.</li>
                <li>Customized or altered garments cannot be returned or exchanged.</li>
              </ul>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <ShieldAlert size={20} className="text-dark" /> 
                Damaged or Incorrect Items
              </h5>
              <p className="text-muted line-height-large mb-0">
                If you receive a damaged, defective, or wrong item, please notify our support team within <strong>48 hours</strong> of delivery via email or WhatsApp with photos of the issue. We will arrange a free pickup and immediate replacement or full refund.
              </p>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <DollarSign size={20} className="text-dark" /> 
                Refund Processing
              </h5>
              <p className="text-muted line-height-large">
                Once your returned item is received and inspected at our warehouse, your refund will be processed:
              </p>
              <ul className="text-muted line-height-large ps-3 mb-0">
                <li className="mb-2"><strong>Bank Transfer / Digital Wallet:</strong> Approved refunds will be credited within 5 to 7 business days.</li>
                <li><strong>Cash on Delivery (COD):</strong> Refunds for COD orders are issued via online bank transfer or store credit vouchers.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default RefundPolicy;