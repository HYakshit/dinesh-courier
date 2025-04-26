interface FaqProps {
    question: string;
    answer: string;
    itemNumber: string;
  }
  
  const FaqItem = ({ question, answer, itemNumber }: FaqProps) => {
    const headingId = `heading-${itemNumber}`;
    const collapseId = `collapse-${itemNumber}`;
  
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={headingId}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded="false"
            aria-controls={collapseId}
          >
            {question}
          </button>
        </h2>
        <div
          id={collapseId}
          className="accordion-collapse collapse"
          aria-labelledby={headingId}
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">{answer}</div>
        </div>
      </div>
    );
  };
  
  export default FaqItem;
  