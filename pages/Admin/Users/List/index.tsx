import React, { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';
import styles from '../../../../styles/AdminPanel.module.css';

const List: React.FC = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <AdminComponent>
            <TitleAdminPanel title="Usuários" path="Dashboard > Usuários" />

            <AdminDeleteModal handleClose={handleClose} show={show}  />

            <AdminListTable first_title="Nome" second_title="Email" third_title="ID" fourth_title="Status">
                <tr className={styles.table_line}>
                    <td>Leonardo Scorza</td>
                    <td>contato@onebitcode.com</td>
                    <td>#000001</td>
                    <td>Administrador</td>
                    <td><FontAwesomeIcon icon={faEdit} /></td>
                    <td><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Leonardo Scorza</td>
                    <td>contato@onebitcode.com</td>
                    <td>#000001</td>
                    <td>Administrador</td>
                    <td><FontAwesomeIcon icon={faEdit} /></td>
                    <td><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Leonardo Scorza</td>
                    <td>contato@onebitcode.com</td>
                    <td>#000001</td>
                    <td>Administrador</td>
                    <td><FontAwesomeIcon icon={faEdit} /></td>
                    <td><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Leonardo Scorza</td>
                    <td>contato@onebitcode.com</td>
                    <td>#000001</td>
                    <td>Administrador</td>
                    <td><FontAwesomeIcon icon={faEdit} /></td>
                    <td><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></td>
                </tr>
            </AdminListTable>
        </AdminComponent>
    )
}

export default List;