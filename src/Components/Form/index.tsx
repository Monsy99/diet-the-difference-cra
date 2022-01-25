import { useEffect, useRef, useState } from "react";
import "./styles.css";
import uploadSimple from "../../images/UploadSimple.svg";
import { FileList } from "./FileList";

export type PreferedDietType =
  | "konsultacja dietetyczna"
  | "pakiet miesięczny"
  | "pakiet dwumiesięczny";
interface IForm {
  initialValue?: PreferedDietType;
}

export const Form: React.FC<IForm> = ({ initialValue }) => {
  const [value, setValue] = useState<FileList | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [preferredDietValue, setPrefferedDietValue] = useState<
    PreferedDietType | undefined
  >(initialValue);

  useEffect(() => {
    setPrefferedDietValue(initialValue);
    formRef.current?.focus();
  }, [initialValue]);

  return (
    <form
      ref={formRef}
      action="https://formsubmit.co/b89b32c1551cb794fd2e24cbef686f6d"
      method="POST"
      className="form"
      encType="multipart/form-data"
    >
      <div className="form__column">
        <input
          type="hidden"
          name="_subject"
          value="Diet the difference form!"
        ></input>
        <input type="text" name="_honey" style={{ display: "none" }}></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_template" value="table"></input>
        <input
          type="hidden"
          name="_autoresponse"
          value="Dziękujemy za przesłanie zgłoszenia w Diet The Difference ! Standardowy czas oczekiwania na odpowiedź to około 48h"
        ></input>
        <input
          type="hidden"
          name="_autoresponse"
          value="your custom message"
        ></input>
        <label className="form__label">
          Imię i nazwisko *{" "}
          <input
            ref={nameRef}
            name="name"
            required
            className="form__input"
            type="text"
          />
        </label>
        <label className="form__label">
          Adres e-mail *{" "}
          <input required className="form__input" type="email" name="email" />
        </label>
        <label className="form__label">
          Numer telefonu
          <input name="phone" className="form__input" type="tel" />
        </label>
        <label id="preffered_diet" className="form__label">
          Jaką dietę preferujesz ?
          <div
            style={
              preferredDietValue !== "konsultacja dietetyczna"
                ? {}
                : { display: "none" }
            }
          >
            *
          </div>
          <select
            name="diet type"
            required={preferredDietValue !== "konsultacja dietetyczna"}
            className="form__input"
          >
            <option value=""></option>
            <option value="dieta wegetarianska">dieta wegetariańska</option>
            <option value="redukcyjna">redukcyjna</option>
            <option value="dla sportowca">dla sportowca</option>
            <option value="zdrowe i racjonalne odzywianie">
              zdrowe i racjonalne odzywianie
            </option>
            <option value="wegetariańska z włączeniem ryb">
              wegetariańska z włączeniem ryb
            </option>
            <option value="dieta specjalna">dieta specjalna</option>
          </select>
        </label>
        <label className="form__label">
          Jaki pakiet Cię interesuje ? *
          <select
            value={preferredDietValue}
            onChange={(e) => {
              setPrefferedDietValue(e.currentTarget.value as PreferedDietType);
            }}
            name="offer type"
            required
            className="form__input"
          >
            <option value="konsultacja dietetyczna">
              konsultacja dietetyczna
            </option>
            <option value="pakiet miesięczny">pakiet miesięczny</option>
            <option value="pakiet dwumiesięczny">pakiet dwumiesięczny</option>
          </select>
        </label>
        <label className="form__label form__label--checkbox">
          <input
            name="RODO"
            className="form__input--checkbox"
            required
            type="checkbox"
          />
          Wyrażam zgodę na przetwarzanie moich danych osobowych *
        </label>
        <button className="form__button form__desktop" type="submit">
          Wyślij
        </button>
        <p className="form__text form__desktop form__text--grey">
          * Pola oznaczone gwiazdką są obowiązkowe
        </p>
      </div>
      <div>
        <label className="form__label">
          Chcesz coś dodać? Napisz wiadomość
          <textarea
            name="message"
            placeholder="Wpisz treść wiadomości..."
            className="form__input form__input--textarea"
            rows={8}
          ></textarea>
        </label>
        <p className="form__text">
          Prześlij wypełniony arkusz z wywiadem żywieniowym *
        </p>
        <span>
          <label className="form__label--fileUpload">
            Wybierz plik
            <img
              alt="upload icon"
              className="form__buttonImage"
              width="22"
              src={uploadSimple}
            />
            <input
              name="questionnaire"
              onChange={(e) => {
                setValue(() => {
                  return e.target.files;
                });
              }}
              type="file"
              className="form__fileUpload"
              accept="image/png, image/jpeg, *.pdf, *.doc, *.docx"
            />
          </label>
          <br className="form__mobile" />
          <br className="form__mobile" />
          <a
            href={"../../files/Wywiad-żywieniowy.pdf"}
            className="form__label--fileDownload"
            download
          >
            Pobierz arkusz
          </a>
        </span>
        <FileList list={value} />
        <div className="form__mobile">
          <br />
          <button className="form__button--mobile form__button" type="submit">
            Wyślij
          </button>
          <p className="form__text form__text--grey">
            * Pola oznaczone gwiazdką są obowiązkowe
          </p>
        </div>
      </div>
    </form>
  );
};
