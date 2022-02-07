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
      action="https://formsubmit.co/7d187e1a4285b9bca4a39f277f6bc847"
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
          <span>
            Jaką dietę preferujesz ?&nbsp;
            <span
              style={{
                display:
                  preferredDietValue === "konsultacja dietetyczna"
                    ? "none"
                    : "inline",
              }}
            >
              *
            </span>
          </span>
          <select
            name="diet type"
            required={preferredDietValue !== "konsultacja dietetyczna"}
            className="form__input form__input--customAppearance"
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
            className="form__input form__input--customAppearance"
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
        <p className="form__additionalInfo form__desktop form__additionalInfo--grey">
          * Pola oznaczone gwiazdką są obowiązkowe
        </p>
      </div>
      <div>
        <label className="form__label">
          Chcesz coś dodać? Napisz wiadomość:
          <textarea
            name="message"
            placeholder="Wpisz treść wiadomości..."
            className="form__input form__input--textarea"
            rows={8}
          ></textarea>
        </label>
        <p className="form__additionalInfo">
          Prześlij wypełniony arkusz z wywiadem żywieniowym *
        </p>
        <div className="form__container--centering">
          <label className="form__label--fileUpload">
            Wybierz plik
            {value?.length ? (
              <span
                style={{
                  marginLeft: "10px",
                  marginBottom: "2px",
                  fontSize: "18px",
                }}
              >
                ✓
              </span>
            ) : (
              <img
                alt="upload icon"
                className="form__buttonImage"
                height="22"
                src={uploadSimple}
              />
            )}
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
          <br className="form__tablet" />

          <a href="/wywiad.pdf" className="form__label--fileDownload" download>
            Pobierz arkusz
          </a>
          <FileList list={value} />
        </div>

        <div className="form__tablet form__container--centering">
          <br />
          <button className="form__button" type="submit">
            Wyślij
          </button>
          <p className="form__additionalInfo form__additionalInfo--grey">
            * Pola oznaczone gwiazdką są obowiązkowe
          </p>
        </div>
      </div>
    </form>
  );
};
