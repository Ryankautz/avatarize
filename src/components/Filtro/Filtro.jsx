import React, { useState } from "react";
import "./Filtro.css";

const Filtro = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [profession, setProfession] = useState("");

  const countries = [
    "Afeganistão",
    "África do Sul",
    "Albânia",
    "Alemanha",
    "Andorra",
    "Angola",
    "Antígua e Barbuda",
    "Arábia Saudita",
    "Argélia",
    "Argentina",
    "Armênia",
    "Austrália",
    "Áustria",
    "Azerbaijão",
    "Bahamas",
    "Bangladesh",
    "Barbados",
    "Bahrein",
    "Bélgica",
    "Belize",
    "Benin",
    "Bielorrússia",
    "Bolívia",
    "Bósnia e Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunei",
    "Bulgária",
    "Burquina Faso",
    "Burundi",
    "Butão",
    "Cabo Verde",
    "Camarões",
    "Camboja",
    "Canadá",
    "Catar",
    "Cazaquistão",
    "Chade",
    "Chile",
    "China",
    "Chipre",
    "Colômbia",
    "Comores",
    "Congo-Brazzaville",
    "Congo-Kinshasa",
    "Coreia do Norte",
    "Coreia do Sul",
    "Costa do Marfim",
    "Costa Rica",
    "Croácia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "Egito",
    "El Salvador",
    "Emirados Árabes Unidos",
    "Equador",
    "Eritreia",
    "Eslováquia",
    "Eslovênia",
    "Espanha",
    "Estados Unidos",
    "Estônia",
    "Eswatini",
    "Etiópia",
    "Fiji",
    "Filipinas",
    "Finlândia",
    "França",
    "Gabão",
    "Gâmbia",
    "Gana",
    "Geórgia",
    "Granada",
    "Grécia",
    "Guatemala",
    "Guiana",
    "Guiné",
    "Guiné-Bissau",
    "Guiné Equatorial",
    "Haiti",
    "Holanda",
    "Honduras",
    "Hungria",
    "Iémen",
    "Ilhas Marshall",
    "Ilhas Salomão",
    "Índia",
    "Indonésia",
    "Irã",
    "Iraque",
    "Irlanda",
    "Islândia",
    "Israel",
    "Itália",
    "Jamaica",
    "Japão",
    "Jordânia",
    "Kosovo",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letônia",
    "Líbano",
    "Libéria",
    "Líbia",
    "Liechtenstein",
    "Lituânia",
    "Luxemburgo",
    "Macedônia do Norte",
    "Madagáscar",
    "Malásia",
    "Malaui",
    "Maldivas",
    "Mali",
    "Malta",
    "Marrocos",
    "Maurícia",
    "Mauritânia",
    "México",
    "Mianmar",
    "Micronésia",
    "Moçambique",
    "Moldávia",
    "Mônaco",
    "Mongólia",
    "Montenegro",
    "Namíbia",
    "Nauru",
    "Nepal",
    "Nicarágua",
    "Níger",
    "Nigéria",
    "Noruega",
    "Nova Zelândia",
    "Omã",
    "Palau",
    "Palestina",
    "Panamá",
    "Papua-Nova Guiné",
    "Paquistão",
    "Paraguai",
    "Peru",
    "Polônia",
    "Portugal",
    "Quênia",
    "Quirguistão",
    "Reino Unido",
    "República Centro-Africana",
    "República Dominicana",
    "República Tcheca",
    "Romênia",
    "Ruanda",
    "Rússia",
    "São Cristóvão e Nevis",
    "São Marino",
    "São Tomé e Príncipe",
    "São Vicente e Granadinas",
    "Seicheles",
    "Senegal",
    "Serra Leoa",
    "Sérvia",
    "Singapura",
    "Síria",
    "Somália",
    "Sri Lanka",
    "Sudão",
    "Sudão do Sul",
    "Suécia",
    "Suíça",
    "Suriname",
    "Tailândia",
    "Taiwan",
    "Tajiquistão",
    "Tanzânia",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trindade e Tobago",
    "Tunísia",
    "Turcomenistão",
    "Turquia",
    "Tuvalu",
    "Ucrânia",
    "Uganda",
    "Uruguai",
    "Uzbequistão",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietnã",
    "Zâmbia",
    "Zimbábue",
  ];

  // Código para checar se o genero está vazio ou nao
//   if (e.target.value === "") {
//       let randomNumber = Math.random();

//       const genders = ["Masculino", "Feminino"];

//       const gender = genders[Math.floor(randomNumber * 2)];

//       setGender(gender);
//     }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado");
    console.log("Idade:", age);
    console.log("Gênero:", gender);
    console.log("Nacionalidade:", origin);
    console.log("Profissão:", profession);

    // fazer requisição daqui pra baixo

    // Limpar os campos
    setAge("");
    setGender("");
    setOrigin("");
    setProfession("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
      }}
      >
      <label>
        Idade:
        <input
          type="number"
          min={18}
          max={90}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Gênero:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </label>
      <label>
        Nacionalidade:
        <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
          <option value="">Selecione um país</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <label>
        Profissão:
        <input
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Filtro;
