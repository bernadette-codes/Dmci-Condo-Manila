const React = require('react'),
    // Modules
    ContactBox = require('./Contact/ContactBox'),
    DMCILogo = require('./DmciLogo'),
    Footer = require('./Menu/Footer');

class GuideSection extends React.Component {
    render() {
        window.scrollTo(0, 0);

        const procedure = [
            {
                "step": "Reserve your desired property",
                "description": "Accomplish the Client Registration Form provided by your Property Consultant (PC). Once this has been accomplished, the PC will prepare a Computation Sheet detailing the payment scheme that will be applied for your home purchase. This process usually takes 3 working days from date of receipt. Lastly, you will be requested to sign the Reservation Agreement, and to settle your Reservation Fee."
            }, {
                "step": "Select your payment scheme",
                "description": "Choose the payment scheme that you will be availing for your home purchase. There are three available modes of payment: Cash, In-house Financing, and External Financing, which can be discussed to you by your accredited Agent"
            }, {
                "step": "Prepare the necessary requirements",
                "description": "The final step is to prepare your documentary requirements."
            }, {
                "step": "Turnover Process",
                "description": "Upon turnover, a specialized DMCI Homes Homeowners kit will be provided. This kit includes the “Feels Real Good to Know” flyer, that will serve as your handbook to frequently asked questions and concerns about your new DMCI Homes community. Concerns such as Association Dues, Real Estate Property Tax (RPT), Special Assessments and Other Fees, and Unit Warranty were fully explained here. This informational flyer is also available at the Property Management Office and Project Sales Office."
            }],
            cashReq = [
            "Signed Reservation Agreement", "Photocopy of either Tax Identification No. (TIN) or BIR Form 1904",
            "Photocopy of any valid Government issued ID/s with signature",
            "Proof of Billing Address (must be the latest billing statement)"
        ],
            bankFinancing = [
            {
                "type": "IF EMPLOYED WITHIN THE PHILIPPINES",
                "requirements": ["Certificate of Employment (COE) stating annual salary and position", "Latest Income Tax Return (ITR)", "Pay Slips (past 2 months)", "Proof of Billing Address (must be the latest billing statement)", "Bank Statements"]
            }, {
                "type": "IF OVERSEAS FILIPINO WORKER (OFW)",
                "requirements": ["POEA Authenticated Contract (seaman)", "COE Authenticated by Philippine Consulate (direct hired)"]
            }, {
                "type": "IF SELF-EMPLOYED",
                "requirements": ["Business Name (DTI-Certified) or SEC Registration", "Articles of Incorporation and By-laws with SEC Registration Certificates", "List of Trade References (at least 3 names and contact numbers of major suppliers and/or customers)", "Audited Financial Statements for the past two (2) years", "Bank Statements for the past six (6) months", "Proof of Billing Address (must be the latest billing statement)"]
            }, {
                "type": "IF PRACTICING DOCTOR",
                "requirements": ["Clinic address/es and schedule", "Bank Statements for the past six (6) months"]
            }, {
                "type": "IF INCOME IS FROM RENTAL OF PROPERTIES",
                "requirements": ["List of tenants and rental amount", "Complete address/es of properties being rented", "Bank Statements for the past six (6) months"]
            }];

        return (
            <div>
                <section id="buyersGuideSection" className="container-fluid">
                    <ContactBox />

                    <div className="guideSection">
                        <DMCILogo />

                        <h2 className="text-left" style={{ background: "url('app/img/icons/listLogo.png') 10px 15px/25px no-repeat padding-box" }}>BUYERS GUIDE</h2>
                        <hr />

                        <img src="app/img/familyImg/fam1.jpg" alt="Buy a Condo" className="img-responsive designImg" />
                        <div className="info">
                            <h3>READY FOR OCCUPANCY AND MOVE-IN POLICY</h3>
                            <p>For as low as <strong><u>20% down payment</u></strong> for mid-rise or <strong><u>30% down payment</u></strong> for high-rise,
                                a homebuyer may immediately move into his or her unit and enjoy the privileges of living in a DMCI Homes residential community,
                                provided his or her unit is completed.</p>
                        </div>

                        <ol type="1">
                            {procedure.map(function(list) {
                                return (
                                    <li key={list.step}>
                                        <p>{list.step}</p>
                                        <p>{list.description}</p>
                                    </li>
                                );
                            })}
                        </ol>

                        <div className="moreInfo">
                            <a href="#cashPayment" className="btn" data-toggle="collapse" style={{ background: "url('app/img/icons/listLogo.png') 10px 12px/15px no-repeat padding-box" }}>Requirements for Cash Payment</a>
                            <div id="cashPayment" className="collapse">
                                <img src="app/img/familyImg/family1.jpg" alt="Buy a Condo" className="img-responsive designImg" />
                                <p>Upon reservation of your chosen unit, a welcome letter shall be given as gratitude for making DMCI Homes your choice.
                                    To facilitate the documentation process and to complete your unit’s reservation transaction, you must submit the following documents to your Sales Agent:
                                </p>
                                <ul>
                                    {cashReq.map(function(req) {
                                        return (
                                            <li key={req}>{req}</li>
                                        );
                                    })}
                                </ul>
                                <p>Once all requirements have been submitted, your Sales Agent shall endorse your documents and all other necessary requirements to the Documents and Inventory Control Department for the preparation of the Deed of Absolute Sale (DOAS).</p>
                                <p>All requirements and payments must be completed within thirty (30) days.</p>
                            </div>

                            <a href="#financing" id="financingBtn" className="btn" data-toggle="collapse" style={{ background: "url('app/img/icons/listLogo.png') 10px 12px/15px no-repeat padding-box" }}>Requirements for Bank Financing</a>
                            <div id="financing" className="collapse">
                                <img src="app/img/familyImg/family2.jpg" alt="Buy a Condo" className="img-responsive designImg" />
                                <p>For direct bank financing, a duly accomplished loan application form with the following pre-approval requirements must be submitted to your Sales Agents,
                                    preferred accredited bank, or DMCI Homes Bank Financing Helpdesk four (4) months before the due date of the bank financing schedule for processing of your bank loan approval:
                                </p>
                                {bankFinancing.map(function(buyer) {
                                    return (
                                        <div key={buyer.type}>
                                            <p className="client">{buyer.type}</p>
                                            <ul>
                                                {buyer.requirements.map(function(buyerList) {
                                                    return (
                                                        <li key={buyerList}>{buyerList}</li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    );
                                })}
                                <p>When approved by your bank, you will be issued a Letter of Guaranty (LOG) which must be submitted to the Financing Department.</p>
                                <p>All requirements and payments must be completed within thirty (30) days.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

module.exports = GuideSection;
