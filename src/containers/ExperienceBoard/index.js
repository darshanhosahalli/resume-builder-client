import React, { useState, useRef, useContext } from 'react';
import { connect } from 'react-redux';
import { AddExperience, EditExperience, DeleteExperience } from './actions';
import JobBoard from '../../components/JobBoard';
import Styled from 'styled-components';
import TitleRibbon from '../../components/TitleRibbon';
import Wrapper from '../../components/Wrapper';
import EditContext from '../../utils/EditContext';

const CompanyImage = Styled.a`
    width: '5rem !important',
    height: '5rem !important',
    margin: '0.5rem !important',
`;

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ExperienceBoard = (props) => {

    console.log('props',props);

    const defaultExperience = { company: 'infosys', from: '', to: '', years: '', jobTitles: [], description: ''};
    const experienceDefault = [];
    const [ experience, setExperience ] = useState(experienceDefault);
    const [ edit, setEdit ] = useState(false);
    const experienceRef = useRef();
    const editContext = useContext(EditContext);

    const addExperice = () => {
        setExperience(experience.concat(defaultExperience));
        props.AddExperience(defaultExperience);
    }

    const renderViewExperience = () => {
        return props.Experience.experience.map((item,index) => {
            return (
                    <div key={index} className="content-width comment" style={{ minWidth: '15rem' }}>
                        <CompanyImage className="ui avatar image">
                            <img alt="image" src="data:image/png;base64,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"/>
                        </CompanyImage>
                        <div className="context-padding content">
                            <a className="author">{item.company}</a>
                            <div className="metadata">
                                <span className="date">From {item.from} - {item.to}</span>
                            </div>
                            <div className="text">
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <JobBoard index={index}/>
                    </div>
                );
        });
    }

    const renderEditableExperience = () => {
        return props.Experience.experience.map((item,index) => {
            return (
                <StyledDiv>
                    <form className="ui form" key={index}>
                    <img className="ui small image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABQVBMVEX///8REiQA0OQAAAD/T0fNzc3a2tv/UUnw8PAsLCylpaXh4eFVVVXKysrV1dX19fWdMSuaMCqw7vT++vr/RDtxcXHRQDrn+vwn1Oj3/f7n5+eenp5jY2MAzeOVlZUAABwjIyMAABi7u7uwsLA+Pj5GRkYAABMxMTGHh4cuLi5AQEBpaWnpSUGLi4t7e3v1TUQQEBBBQUyJiZHQ9Ph14O6GKiZjIB0AvdDZRD0ZGRm/PDbYQzxKGBazODLb9/pzJSEfHy0pKjhtbnZdXWaBgYk3OEZtbXRX2+uF5O7F8fd+4e1zjJCd6fIALjSzVVW/eHnKb26PmqNwqrhAFBRftsYkCw0pDQwpnKoAe4cATliyhoP/trPZk5FVGheEq6+lKiMsGxgAPkSpipJ2MjF4IRmYWFsYCAc8foee2uGeIRdSU1ycvSdtAAAPQUlEQVR4nO2diV/iSBbHgQKCIInaHhAkCCLaLYpEYRQvLo/udXe219HZ3l1nZ/ZwZvn//4B9ryoJCSQcIpI49fMDJuH41Jd69erVq0ri83FxcXFxcXFxcXFxcXFxcXFxcXFxcb2BksnkrIswDR3eBNLpm8+zLsaraykdoLrz+dbWZl2YV9ShxhVI3wbSgcThrMvzaroJ6ELCdPrdmGQ6YFXiPfiRz0dHdz1cgfTFrEs1sZI3aTC9PjDv2+JdHxTT0qwLNqkS9lwer7OLpaWAQ40F0onEFze3tL0VJ+3+4Sbd37osbOm7WRffUZvEUX8cCOVskBFlbkd6e5IeRZ3BvhvOBR1a7xeGdumHox9mQWMSgFVOV210+icnt2GtMkszi0Tz+s/yMTcrJCYAWxCCdvp+NDBT2BjbZ0wruS38tyXODmsQ2J/HBGM05GMK21duG7fXY24EK47CpbcxWdmgWPNx44sPcH8n4j6w5a8jVFmaBiChdWaDe7SGIko+hf/28NBBygVgQtCCuPyXoWTpW59Pip5Qqk+b9AuZV6TuPsIc5Gy8CAU7Pns6Bq7KPTAKtbNqMRgsXZ7Vlr//4TtdEGf06+jQF9YdRoii6F5Rs0BxnnqR+KASTBOsSsilEFyFMgDSPSGLQvCckIdScPmBkHOhtEhICnM5PQIfQQsO9kZBxBVGdWCAwTto21uXZwO2gMUXis/kDGqsQsiqEDwGVjDHKmVdQLA+yQoxOQwp+pHuzaWkbROYHgJ0DyQvDtfeYJjK2tjpMfWDq7SNreKOUFylDW0VuAQ7MM1hnDCHIWoWuY6QcxYwn7QHVag5/osviTQGoDdL02Zz9opd9YNJWlvKb1Ivscm6MKIwi+sB8/nmNbDkkRF+phNTHva8BMxwGDS0iO1oFml4PyewNcsQaMojg7HBJM1hbFOHoe9t7JmCDAewtd6+YqpkY4LpEQZtS77YnhZv5CzDFAewm0Av2TStcSywuBZh7NC2FGeVRfZ7I0J7MJvkyTSTeAysWESAUpEiFksC3QmyHQYWhc6X+fMtGmHIqQNtr39MaQ9mF7lMMSNEwaA3rgnB0j2pAgr0xqcA9EwqEGFdksciBdvRXMQ+dRh61e3bjkxswT7bjcdvpgwG3XBVjzwEjDxon/xQEkpwqEbBWKfFHEZqjnXF0b7KkiJOYPKtbbA5PVukYKuPj9Adl6rPFbC784d7sMLi2TMGjovPTyUdbJ3685AWN+32VZYki3HREazPdVD3Mb2JGwoGok6CNi6hxFxGqXuoBvHfDrqISPST5uv7gj85HIqHQjZgyc93P/71mwPY9KZtRvGKQPY3tJnwiilusihCqUJ2YHeYIE8E7EdA6Yu1pbsvR7dLrw84Gtjy333SJoui5pTeQXEkHGdUdmA3g3N4CZa4hOfbV7bK0cCC/9g5MLUzM1UsZFDZgB2NkJvUa+/2NTzJhZ41Gwms9GQJcg1JQGXG6gOz9fGOZIlJK23tCIcOX5KjgNHXFqxBrkYl91L1g9l6jAFok80FXJh/IAZWq2H5j88x2iid05HY6jm6xeL5KYs81sM9VGI/VR9YcjyuCd1/0nBQNzpYhWYDioQ8QqdVxT4Ze+snQDoj5FgLqUySxZAdVR/Y2jiWSNWXMR9DS93B3qEGdklzHqcs53FG6xCirEfoxZ71yKM7HovY11UvWPLi8+Hh2GCTDGWOul9zp4EVLy/R7haqEDEGjy8ruFOpYqJgtbpoGbYYHZat4kbk8Rsudxk8B+VQZS9zjYdHN7emBn2bPPyJkH9C6MQiD+3ZtEP/6WBI5YgFr4RlFjz+/MtIEzX2etEYDYdEll8Rg4Lv2stDvL0GJjlBIa0Ohfr15ViBwNELuBzacuKH0svBAEo0Q4GWJuF6kS0uOdh84ofBdeYEFoc2FYv0jl16UxtjKj0uGESbjt1l4l8DyezAsKZitlMpY0RRtmDjddLJo4EuKr3c4y8snqQXjPoJWygYaE5YYeOOZIbENol/G+5eOK5WkGmxijGH2d1TMJPz61EER2TihC1s3Bpzal0G2C//EYS+DroUtHTQkiOUJIdF1hOIvtvJLHHMNjYsGE38YoRUwd6Q6tQA6/MTyEQryjQem7CJjRdUJYfN4CWsQTCaohEEC/aTEpaKCpnAJuNKj9ePDQP7bhSvaFEk1sukgX2ZsMbGizyG/IyJ70fpx0wVhV2YbRAysfMYM7y/GPxlP43UQSOTQ0WZwCZz92On8wf9jomvQ4JF3XmEQwOhGNiw9M1grvEjxQsnx5j+8b+TBsG64nTYMv7osluWF6W8k2t2itJhiwZAow1B3zEOjQDGYmHWH7y8ld28YsabpbgfMMUtVJ8x5jh/xhR3SU9xn5WGRPdQTTqSph9HWqxkU1+vmcnvTkoI5kkJgU5KBLuTEv1gcXMtWfTztxdY42tPShvTSEGh9IhzLsIi5m/YNFIweEkeijZBMCL1D1h0zRFySxcH6EokEoH0AMHo99XPmrFO/NHWVSz17HTB0PBC4Zh9FGwGiyTXPi8Z+vXbt9+WBujzFBZ+jDFVK8EIbAhSF8xyYN5Y5/F2etk6DxtBNBwLi47zY14EwwBfZC3Pbn7M5z2wD1BJImt3psjDy2AfWCXF+0Nhl4EJx8d0BYS2SIyuijAWiVnGY9iSRNExuHcbGC7rC+IIWl/WF8RE/iVEV3RZnxEE21aSm8GcFmIKgyIPL4Cdnp3hGsXK/QI81+7Z0tl7TBec318OjhXdDaY7iZ7/+s7IYHHndR5u9ooDJiVoFwbho+y4Msc7YHEqDScimUMtT4LpPAzH/js9B0Zx7AZgPXIRmJ4OYM+CaUd3HtHhX2XIPWDCwjkyrC7STDDbqdGd4iI4fRx7ehPskpAKPYeAwLDyCc8uwAVv9zCofsAw5P2ALWhgwdLjiGASKgLCHfeAlRYXMB1Qq6xS66Pe5LyCpnhcOResYAxAluVYLBaGkSWExCb/77YO2uIv+pdDMDAp3iPPhFSO7l4H82qsyME42MzBqIvodR6C/uxdsOOzJzz/rfJ4jisg7qslY6BZu694GaxqXq9opAYejUkJDSysSXRSKBR2F9giS+BDsAFWeUmXQwAlnujyRFeYejakCq6eYrMq1uh0xOoxS7/RNkbP0fQumLNfFIKeBhvJ3Y8sDjZNjdlBg+sLh2MxCO4jmMGRbK+z4kUwJkuAL5phJXeB6UGH0EUUmEcZOfLQQF3WQdPJdTxHEy8voE2u00G1UCHPRW9HHlXbq0NYIw/vgdXozFHpDGsMc214juYDrvYIVujpLp4F6w/o30l0P6JXjImixyb+RgNDfZDkWHjAvKZnwTRJkVjYdiba62BMxtoB14NpnfKoYEwUTzdOt4HV6NqHIl2RLrCdUzo4K50fCyMFwdpiFpeBGSNoPKHg0nRCQfBsvBG05LJYsW85RFCgOQ/9HE3PDluKVUxMBRfP6DmaT3iOZqnyhLmB2lllNFM0yz1g/fMQlnlND4O9zN07iYNNU+8WLEXI/5aH6X8jLJ01yRVg0PV8GC5prOv+ugNsCuJgXtPvBkzefpdgEr2s7vsDYxfb3ZthcV5PJrD4wYwuOjsVGWAhdpng0IzL82rSwGR6YeeTGV8e/jVFwSR2QcZxYkzXC8Bkdtnj2V08fSoCsO335DMMsQtmzvYGBVMRgm2/I59haPed+Yyu4rO/bQsXFxcXFxcXFxcXFxcXFxeXVXI4rOcDY6KoTf/g+cHayzJe2+KDLBtH8Lqf2rWQJf2gLEu+7rYb8osivUdaHm9gkqP3aNmmt0LCu97RPGEEE6HwNnZfNYV9CD6zTTdScJCeQnZCUpiswu24KyaRctrNgkKm+w5jsRR9jmvTDEbILh6LEZ0HwbZwA8Fi7OUtcjD7RDfWRw5+5BUwILYZOqFlVsgJ+YTvgGJqYFFZzBOCVqaQj/NkB19FMHrfTATz7eNHc65IMka7pUhpm2BJ+1j2dTrdGiHbWxpYjlYfUmwTBT7IPpTfIic+DUzCyt0iG7NhsWhXu2epj870UwuSaFUpZH4Fy7pJVna7YAAPjTEMlitT60WwECGKBoYGrMzqzqdW5dkPj4JfWtI2PkpQxE85bD3zJL6ugSkhNDx4ww4+fyJgvgA2R29dpYFJOP+cnw2KVXlyoG+awOYQbA4MS4I2CAU3OQ90mSfMVk8kBNtgPmODLb7CWbJZ3M+1T/PdGjNMcQ5/cwVKPE9yOYDqgp3Q+02C7Z3MzW1otrlBfQZ0GhRM2iDzsyHp0U73B97TGgcgrDCwFFlfgWPz3TZGtU+6rp+CQdXm57Xlcnl8swsE5c2jAw9JaFEb4OflPGVVmI0dgG/pAYNK2YrncnFawxSM3Z2WgW27BMyHt0779GkDuyecHM/nWX9MwdC17Pp6weJat5DDBsfAfNvuA9MNC5uXdkNJ2vPuYeNj1rmFzUZkfgO0ri0nQgNE/47bcUJ9PsgtbQwk56KbIRYDReLRaFwLZPGyqxFR/ADdFgbGkijq97IWRX0jxN7GDsrahvUuWFxcXFxcXFxcXFxcXFxcXFxcXFxcb6XwO5WPvFP5/O9UHMxrGgiWyVj2tIc3pIGV4dGos+0r/bVsq1NoGHv+TsbfaF35PSIGlrluZbNqtpD1ZwtE9WcKhWymQDaj0WgzRQqE+DOENERCrtTyjMs7srQaq6uFeruttElbabaVhqK0y1874Q4hTbmliqFGORwux8tio+yyGsOmkaVNJuPPZM0NRQMrqP7rZjPbbF4TomZUP2k2O4VyKNxuKo0QaW3mrkhDFrNv3MSuWuVOPeOvX2Xhuay2rrKNrL/eBIoG/Pnr9UzrSu0oV2qzk2qpHbV9lSq321kzWKbVUuHvul3OFNRMqpC9bnfAGDPhttLJkatcvFAAsPobg2VVtRPdhwcU92tH7aTgx293Us1CExWFV9tEKTfL6iZRU0RRU/5ovX2dMYP5M9F2Xc00Goq/3mo1W3611cmkrtV4OdwIN3NNJdcGUwwX3hjsWum0y9EyAKjtRutru91SsWLqcKClKp3WdfPqut0ud9RWud1sl1OdZrv1tWAFu65nGuo+PJqFFrlW641GpqO0s4VWOaO0CoVrpdEkzTd3HfVsuV6/AmP0N7LlTMNfLtSv4ABswx5s1P3lbLlRLjT8GdgA717Qi2j0Y7QZZukDWmOWHgIviccL8MgW/PiCd/T7jDy8LA7mNf0fyP4iro8mPoEAAAAASUVORK5CYII="></img>
                    <div className="ui input focus">
                        <input type="text" onChange={(e) => { this.props.EditExperience(index, 'company', e.target.value) }} value={item.title}/>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Start date</label>
                            <div className="ui calendar" id="rangestart">
                                <div className="ui input left icon"> 
                                    <input type="date" onChange={(e) => { this.props.EditExperience(index, 'from', e.target.value) }} value={item.from}/>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>End date</label>
                            <div className="ui calendar" id="rangeend">
                                <div className="ui input left icon">
                                    <input onChange={(e) => { this.props.EditExperience(index, 'to', e.target.value) }} type="date" value={item.to} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" onChange={(e) => { this.props.EditExperience(index, 'description', e.target.value) }} value={item.description}></textarea>
                    </div>
                    <div className="comments">
                        <div className="content-space">
                            <JobBoard index={index}/>
                        </div>
                    </div>
                </form>
                <i onClick={ () => { this.props.DeleteExperience(index) } } className="trash alternate icon" style={{ cursor: 'pointer' }}></i>
            </StyledDiv>
            );
        });
    }

    const renderExperience = () => {
        if(editContext) {
            return renderEditableExperience();
        } else {
            return renderViewExperience();
        }
    }

    const renderAddButton = () => {
        if(editContext) {
            return <div className="content-width comment">
                        <a className="ui avatar image">
                            <img alt="image" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/plus.png"/>
                        </a>
                        <div className="context-padding content" style={{ paddingTop: '15px' }}>
                            <a onClick={addExperice} className="author">Add Experience</a>
                        </div>
                    </div>
        }
    }

    return <Wrapper>
            <TitleRibbon title="Experience"/>
            <div className="ui threaded comments" ref={experienceRef} >
                {renderExperience()}
                {renderAddButton()}
            </div>
        </Wrapper>
}

const mapStateToProps = state => {
    return { Experience: state.experience } ;
}

export default connect(mapStateToProps, { AddExperience, EditExperience, DeleteExperience })(ExperienceBoard);