import React, {useState, useCallback} from "react";
import Footer from "../../component/footer";
import {StyledHome} from "../home/home.styled";
import {TopBlockLeftH1,DivSub, DivFile, DivLinkInput,DivLinkInputA, InputFile,ContentContact, PoleCommit, RowForm, FormBlock, FooterContactMail,TopBlockLeftP} from "./contact.styled";
import { useForm } from "react-hook-form";
import TextareaAutosize from 'react-textarea-autosize';
import HeaderPage from "../../component/headerPage"
import X from "../../assets/img/X.svg"
import Glob from "../../assets/img/Glob.svg"
import {useDropzone} from 'react-dropzone'


const Contacts = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };


    const [blur, setBlur] = useState(false)
    const onSubmit = (data, usecastomerNumber=null) => {
        setBlur(true)
        console.log(blur)
    }


    const [dataInput, setDataInput] = useState()
    const ConnectData = event => {
        setDataInput(event.target.value)
    }

    const Dr = () => {
        setFileName()
    }
    const [fileName, setFileName] = useState()
    
    console.log(fileName)

    const onDrop = useCallback(acceptedFiles => {
        console.log([acceptedFiles][0][0].name)
        setFileName([acceptedFiles][0][0].name)
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    return (
        <>
        <HeaderPage/>
        
        <div className="tableHome conteiner">
            <StyledHome>
                <div className="gridConteinerCases">
                <div>
                <TopBlockLeftH1>
                    {blur ? "Спасибо за время" : "Давайте сотрудничать "}
                </TopBlockLeftH1>
                
                    {blur ? <TopBlockLeftP>Мы уже совсем скоро откроем и прочтем ваше письмо! <br/> А пока подписывайтесь на нас в соцсетях, хорошего дня <span className="glob"><img src={Glob}/></span></TopBlockLeftP> : <TopBlockLeftP>Если вы хотите обсудить свой проект с нами или просто познакомиться отправьте своё сообщение заполнив эту&nbsp;форму. Наши двери всегда открыты. </TopBlockLeftP>}
                 
                <FormBlock blur={blur}>
                    <form onSubmit={handleSubmit((data)=>onSubmit(data))}>
                        <RowForm  >
                            <input placeholder="Как вас зовут" autocomplete="off" 
                                   name="firstName"
                                   autoFocus={true}
                                   className={errors.firstName && errors.firstName.message}
                                   ref={register({
                                       required: 'Required',
                                   })
                                   }
                            />
                            <input name="nameCompany"  autocomplete="off"  placeholder="Название компании"/>
                            <div> 
                                <ContentContact active={active === 0}>
                                    <input name="email"  autocomplete="off"  placeholder="example@gmail.com"
                                           className={errors.email && errors.email.message}
                                           onChange={event => ConnectData(event)}
                                           value={dataInput}
                                           ref={register({
                                               required: 'Required',
                                           })
                                           }
                                    />
                                </ContentContact>
                                <ContentContact active={active === 1}>
                                    <input name="telegram" autocomplete="off"  placeholder="@KOMNATA "
                                           className={errors.telegram && errors.telegram.message}
                                           onChange={event => ConnectData(event)}
                                           value={dataInput}
                                           ref={register({
                                               required: 'Required',
                                           })
                                           }
                                    />
                                </ContentContact>
                                <ContentContact active={active === 2} >
                                    <input name="whatsapp" autocomplete="off" type="number"  placeholder="+7(999)999-99-99"
                                           className={errors.whatsapp && errors.whatsapp.message}
                                           onChange={event => ConnectData(event)}
                                           value={dataInput}
                                           ref={register({
                                               required: 'Required',
                                           })
                                           }
                                    />
                                </ContentContact>
                                <ContentContact active={active === 3} >
                                    <input name="phone" autocomplete="off"  placeholder="+7(999)999-99-99"
                                           className={errors.phone && errors.phone.message}
                                           onChange={event => ConnectData(event)}
                                           value={dataInput}
                                           ref={register({
                                               required: 'Required',
                                           })
                                           }
                                    />
                                </ContentContact>
                                <DivLinkInput>
                                    <DivLinkInputA onClick={handleClick} active={active === 0} id={0}>email</DivLinkInputA>
                                    <DivLinkInputA onClick={handleClick} active={active === 1} id={1}>telegram</DivLinkInputA>
                                    <DivLinkInputA onClick={handleClick} active={active === 2} id={2}>WHATsAPp</DivLinkInputA>
                                    <DivLinkInputA onClick={handleClick} active={active === 3} id={3}>phone</DivLinkInputA>
                                </DivLinkInput>
                            </div>

                        </RowForm>
                        <PoleCommit>
                            <TextareaAutosize maxRows="7"  placeholder="Начните набирать сообщение здесь" />
                        </PoleCommit>
                        <InputFile>
                            <DivFile {...getRootProps()}>
                                <input type="file" name="file" autocomplete="off"  id="file" className="inputfile" onChange={(e) => setFileName(e.target.files[0].name)}  {...getInputProps()}/>  
                                <div >
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          fileName && fileName.length ?
            <a onClick={Dr}> <span className="downFile"> {fileName}  <img src={X} /> </span></a>: 
            <a><label className="down" htmlFor="file">Добавить файлы</label></a> 
      }
                                </div>
                            </DivFile>
                        </InputFile>
                        <DivSub>
                        <a><button type="submit"> ОТПРАВИТЬ ПИСЬМО </button></a>
                        <p>{errors.firstName && "Чтобы отправить письмо заполните выделенные поля"}</p>
                        </DivSub>
                    </form>
                </FormBlock>
                </div>
                <div>
                <FooterContactMail>
                    <div>
                        <p>ИЛИ ПИШИТЕ НА ПОЧТУ АГЕНТСТВА</p>
                        <h1>hello@komnata.agency</h1>
                    </div>
                </FooterContactMail>
                </div>
                </div>
                <Footer/>
            </StyledHome>
        </div>
        </>
    )
}
export default Contacts;
