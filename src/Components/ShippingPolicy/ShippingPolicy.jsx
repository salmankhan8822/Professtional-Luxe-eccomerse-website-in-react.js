
import { Link } from 'react-router-dom';
import './ShippingPolicy.css';
import { Truck, Clock, MapPin, AlertCircle } from 'lucide-react';

function ShippingPolicy() {
  return (
    <div className="shipping-page-wrapper position-relative">
      <div className="container py-5">
        
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-muted">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Shipping Policy</li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold letter-spacing-wide mb-3">SHIPPING POLICY</h2>
          <p className="text-muted">Review our shipping rates, delivery times, and order processing details below.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            
            {/* Policy Sections */}
            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <Clock size={20} className="text-dark" /> 
                Order Processing Time
              </h5>
              <p className="text-muted line-height-large">
                All orders are processed within <strong>1 to 2 business days</strong> (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. 
                During high-volume sale periods or new collection drops (like our Summer Lawn or Winter Velvet launches), processing times may be slightly delayed.
              </p>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <Truck size={20} className="text-dark" /> 
                Domestic Shipping Rates & Estimates
              </h5>
              <p className="text-muted line-height-large mb-3">
                We offer nationwide delivery across Pakistan. Shipping charges for your order will be calculated and displayed at checkout.
              </p>
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Shipping Method</th>
                      <th scope="col">Estimated Delivery Time</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Standard Delivery (Nationwide)</td>
                      <td>3 to 5 business days</td>
                      <td>Rs. 250</td>
                    </tr>
                    <tr>
                      <td>Express Delivery (Major Cities)</td>
                      <td>1 to 2 business days</td>
                      <td>Rs. 400</td>
                    </tr>
                    <tr>
                      <td><strong>Orders over Rs. 5,000</strong></td>
                      <td>3 to 5 business days</td>
                      <td><strong>FREE</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <MapPin size={20} className="text-dark" /> 
                Order Tracking
              </h5>
              <p className="text-muted line-height-large">
                When your order has shipped, you will receive an email and SMS notification from us which will include a tracking number you can use to check its status. Please allow up to 24 hours for the tracking information to become available. 
                If you haven't received your order within 5 days of receiving your shipping confirmation email, please contact us at <strong>infokashafpk@gmail.com</strong> with your name and order number.
              </p>
            </div>

            <div className="policy-section mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <AlertCircle size={20} className="text-dark" /> 
                Damages & Missing Packages
              </h5>
              <p className="text-muted line-height-large">
                LUXÉ is committed to ensuring your items arrive safely. If your order arrives damaged in any way, please contact us as soon as possible via WhatsApp or email with your order number and a photo of the item's condition. We address these on a case-by-case basis and will try our best to work towards a satisfactory solution.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ShippingPolicy;