import "./Profile.css";
import { getPersona } from "../../services/InvenstoryService.jsx";
import { useEffect, useState } from "react";

function Profile({ params }) {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        //TODO: implementar o getPersona
        // const result = await getPersona(params);
        const result = {
          persona: {
            name: "Lia Martins da Silva",
            age: "25",
            gender: "Transgender",
            origin: "Brazil",
            address:
              "Maria da Silva  \nRua das Flores, 72  \nBairro Jardim das Acácias  \nSão Paulo, SP, 04567-000  \nBrasil",
            profession: "Prostitute",
            biography:
              "Lia Martins da Silva, uma mulher trans de 25 anos, vive em uma pequena casa na Rua das Flores, 72, no acolhedor Bairro Jardim das Acácias em São Paulo. Desde cedo, Lia enfrentou desafios e preconceitos, mas sempre se levantou com coragem e graça. Sua vida como trabalhadora sexual não é apenas uma forma de sustento, mas também uma expressão de sua autonomia e resistência. Lia sonha com um mundo mais justo, onde todas as identidades sejam celebradas. Nas horas livres, ela se encontra com suas amizades no parque, onde compartilham risadas e histórias, enchendo o ar com a esperança e a luz que a vida pode oferecer.",
            photo:
              "https://v3.fal.media/files/kangaroo/zDTAPC_bQcrbT6-rSXEfE.png",
          },
        };
        setDados(result);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  const handleGender = (gender) => {
    if (gender === "masculino") return "Masculino";
    if (gender === "feminino") return "Feminino";

    return "Outro";
  };

  return (
    <div className="container-right">
      {loading ? (
        <h2>Carregando...</h2>
      ) : dados ? (
        <>
          <div className="details">
            <div className="photo-profile">
              <img src={dados.persona?.photo} alt="Foto de perfil" />
            </div>
            <div>
              <p>
                <strong>Nome: </strong>
                {dados.persona?.name}
              </p>
              <p>
                <strong>Idade: </strong>
                {dados.persona?.age}
              </p>
              <p>
                <strong>Gênero: </strong>
                {handleGender(dados.persona?.gender)}
              </p>
              <p>
                <strong>Nacionalidade: </strong>
                {dados.persona?.origin}
              </p>
              <p>
                <strong>Profissão: </strong>
                {dados.persona?.profession}
              </p>
            </div>
          </div>

          <div className="biography">
            <h3>Biografia:</h3>
            <p>{dados.persona?.biography}</p>
          </div>
        </>
      ) : (
        <h2>Nenhum dado encontrado.</h2>
      )}
    </div>
  );
}

export default Profile;
