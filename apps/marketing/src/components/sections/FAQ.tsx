type FAQItem = {
  question: string;
  answer: string;
};

const items: FAQItem[] = [
  {
    question: "Is PurrKit free?",
    answer:
      "Yes! PurrKit is completely free and open source. Our goal is to remove financial barriers for rescues so they can focus resources on the animals.",
  },
  {
    question: "Is it open source?",
    answer:
      "Absolutely. You can find our code on GitHub, inspect it, contribute to it, or even host it yourself if you prefer.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "Not at all. We designed PurrKit specifically for non-technical volunteers. If you can fill out a form, you can use PurrKit.",
  },
  {
    question: "Can I import data from a spreadsheet?",
    answer:
      "For our MVP launch, entry is manual. However, a bulk CSV importer is one of our top priorities for the next update.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-base-200 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-base-content">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {items.map((item, idx) => (
            <div
              key={item.question}
              className="collapse collapse-arrow rounded-xl border border-base-200 bg-base-100 shadow-sm"
            >
              <input type="radio" name="faq-accordion" defaultChecked={idx === 0} />
              <div className="collapse-title text-lg font-medium text-base-content">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
