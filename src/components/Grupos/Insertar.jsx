import { insertarGrupo } from "@/lib/actions";
import Modal from "../Modal";

function GrupoInsertar() {
    return (

        <Modal openElement={<p className="inline border-2 border-black">Insertar grupo</p>}>
            <form action={insertarGrupo}>
                <input name="nombre" placeholder="Nombre" />
                <input name="tutor" placeholder="Tutor/a" />
                <input name="aula" placeholder="Aula" />
                <button className="border-2 border-black">Insertar grupo</button>
            </form>
        </Modal>

    );
}

export default GrupoInsertar;