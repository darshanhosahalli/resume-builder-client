import react, { useContext } from 'react';
import TitleRibbon from '../../components/TitleRibbon';
import Wrapper from '../../components/Wrapper';
import TextInput from '../../components/TextInput';
import { connect } from 'react-redux';
import EditContext from '../../utils/EditContext';
import AddButton from '../../components/AddButton';

import  { EditAccomplishments, AddAccomplishments, DeleteAccomplishment } from './actions';

const Accomplishments = (props) => {
    const editContext = useContext(EditContext);

    const renderAccomplishments = () => {
        return props.accomplishments.map((item, index) => {
            return <li><TextInput text={item} key={index} onUpdate={props.EditAccomplishments} index={index} editable={editContext}/></li>
        });
    }

    const addAccomplishmentButton = () => {
        const initialAccomplishment =  "";
        if(editContext) {
            return <AddButton label={`Add ${props.title}`}
                              onClick={props.AddAccomplishments}
                              onClickValue={initialAccomplishment}
            />
        }
    }

    return <Wrapper>
        <TitleRibbon title={props.title}/>
        <div><ol>{renderAccomplishments()}</ol></div>
        {addAccomplishmentButton()}
    </Wrapper>
}

const mapStateToProps = state => {
    return { accomplishments: state.accomplishments.accomplishmentArray } ;
}

export default connect(mapStateToProps,{ EditAccomplishments, AddAccomplishments, DeleteAccomplishment })(Accomplishments);