import { Mail } from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
}
export const ContactSection = ({ darkMode }: ContactSectionProps) => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
      <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <p className="text-xl mb-6">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <a
          href="mailto:contact@example.com"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
        >
          <Mail className="mr-2" size={20} />
          Send me an email
        </a>
      </div>
    </section>
  );
};
export default ContactSection;
