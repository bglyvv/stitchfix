import React from "react";
import "./faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import * as $ from "jquery";

const faqs = [
  {
    question: "Is this a subscription service?",
    answer:
      "Nope—order a Fix delivery of curated pieces whenever you’d like, then instantly buy items from your very own shop anytime. There’s no subscription required.",
    linking: false,
    link_content: null,
  },
  {
    question: "What do I pay and when?",
    answer: `If you'd like pieces selected by your style expert, there's a $20 styling fee up front—and that fee gets credited toward anything you keep. (Don't worry, we'll let you preview items before we send anything your way.) You'll also get 25% off if you keep all five items in your Fix.`,
    linking: true,
    link_content: "About our pricing",
  },
  {
    question: "Will I be able to see items before they’re sent in my Fix?",
    answer:
      "Yes. We’ll email a preview of your Fix before it ships, giving you the opportunity to collaborate and share feedback with your stylist. (We don’t yet offer a preview for a kid’s Fix.)",
    linking: false,
    link_content: null,
  },
  {
    question: "What do items cost?",
    answer:
      "We have items across every price range and carry thousands of just-right styles. Easily set your price preferences for each clothing category in your style quiz.",
    linking: true,
    link_content: "About our pricing",
  },
  {
    question: "How do you find my style and fit?",
    answer: `We're fit experts. We learn from your style quiz and ongoing feedback to pinpoint the best items for your taste, size and fit. Bonus: The more we interact, the more personalized your experience becomes.`,
    linking: false,
    link_content: null,
  },
  {
    question: "Can I shop on my own without a stylist?",
    answer:
      "Yes! After ordering your first Fix, you will be able to browse your own personalized store using Freestyle. Here, you’ll be able able to shop outfit suggestions and new pieces refreshed daily, just for you. You can even shop to complete looks with items you purchased in your Fix.",
    linking: false,
    link_content: null,
  },
  {
    question: "Free shipping, returns & exchanges?",
    answer:
      "Yep—shipping, returns & exchanges are always free. A prepaid return label is included with each order.",
    linking: false,
    link_content: null,
  },
];

export default function FAQ() {
  const extendAnswer = (e) => {
    
    let display = $(e.currentTarget).parent().find(".answer").css("display");
    let answer = $(e.currentTarget).parent().find(".answer")

    if(display === 'none'){
        $(e.currentTarget).find('.minus').css({display:'inherit'})
        $(e.currentTarget).find('.plus').css({display:'none'})
        answer.css({display:'block'})
    }
    else{
        $(e.currentTarget).find('.minus').css({display:'none'})
        $(e.currentTarget).find('.plus').css({display:'inherit'})
        answer.css({display:'none'})
    }
  };

  return (
    <div id="faq">
      <div className="container">
        <div className="header">
          <h1>FAQs</h1>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-lg-5">
            <div className="faqs">
              <div className="faqHolder">
                {faqs.map((faq, index) => {
                  return (
                    <div key={index} className="faq">
                      <div className="question" onClick={extendAnswer}>
                        <span className="icon">
                          <FontAwesomeIcon icon={faPlus} className="plus"/>
                          <FontAwesomeIcon icon={faMinus} className="minus"/>
                        </span>
                        <h6>{faq.question}</h6>
                      </div>
                      <div className="answer">
                        <p>{faq.answer}</p>
                        {faq.linking === true && (
                          <a href="/">
                            {faq.link_content}&nbsp;{">"}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
