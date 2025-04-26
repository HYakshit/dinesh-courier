import FaqItem from "./FaqItem";

const Faq = () => {
  const faqData = [
    {
      question: "How I can ship items in Dinesh Courier?",
      answer:
        "You can call to us on number +91 9877049989. You can also enter your details in ship now form to get a call.",
      itemNumber: "one",
    },
    {
      question: "What are the services that can be availed Dinesh Courier?",
      answer:
        "Services include domestic and international shipping at reasonable prices.",
      itemNumber: "two",
    },
    {
      question: "What kind of items I can not ship through Dinesh Courier?",
      answer:
        "For international service items prohibited from shipping include, but are not limited to, explosives, inflammable substances, sharp instruments, currency, organs, body parts, mobile phones, articles of gold or silver.",
      itemNumber: "three",
    },
    {
      question: "What are the packaging guidelines?",
      answer:
        "Ensure name and number of items is correct. Items should be securely packed to prevent damage. Fragile items should be labeled properly.",
      itemNumber: "four",
    },
  ];

  return (
    <section className="view bg-grey" id="faq">
      <div className="faq row align-items-center">
        <div className="col-12">
          <h4 className="heading text-center">Frequently Asked Questions</h4>

          <div className="accordion" id="faqAccordion">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                itemNumber={faq.itemNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
