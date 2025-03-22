import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  return (
    <Card className="border-none">
      <CardContent>
        <CardTitle className="text-[#2893B3] text-center mb-14 text-[25px]">
          Contato
        </CardTitle>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[#2893B3] mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
              placeholder="Seu nome"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#2893B3] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
              placeholder="Seu email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-[#2893B3] mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
              placeholder="Sua mensagem"
              rows="5"
            ></textarea>
          </div>
          <Button variant="default" className="w-full sm:w-auto">
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
