import {S} from './ApplicationForm_Styles.ts'
import React, {type ChangeEvent} from "react";
import type {FormState} from "../Application.tsx";
import {FormFooter} from "../formFooter/FormFooter.tsx";
import data_processing from "../../../../../public/data_processing.pdf"


export type ApplicationForm = {
    setFormData: (FormData: FormState) => void
    formData: FormState
    handleSubmit: (e: React.FormEvent) => void

}
export const ApplicationForm: React.FC<ApplicationForm> = ({setFormData, formData, handleSubmit}) => {

    const yearOptions = {
        '': ['Выберите курс'],
        'бакалавриат': ['1 курс', '2 курс', '3 курс', '4 курс', '5 курс', '6 курс'],
        'магистратура': ['1 курс', '2 курс'],
        'аспирантура': ['1 курс', '2 курс', '3 курс', '4 курс']
    };

    const moscowUniversities = [
        'МГУ', 'МГТУ', 'МФТИ', 'МИФИ', 'ВШЭ', 'РАНХиГС', 'МГИМО', 'РЭУ', 'МИСиС',
        'МАИ', 'МЭИ', 'РУДН', 'МГМУ', 'РНИМУ', 'МГЮА', 'МАРХИ', 'ГУУ', 'ФУ', 'МПГУ',
        'МТУСИ', 'МИРЭА', 'МГПУ', 'МГХПА', 'МГАХИ', 'ГИТИС', 'МГК', 'МГАУ', 'МГСУ'
    ].sort();

    const universitiesWithOther = [...moscowUniversities, 'Другое'];

    const russianRegions = [
        'Адыгея', 'Алтай', 'Алтайский край', 'Амурская область', 'Архангельская область',
        'Астраханская область', 'Башкортостан', 'Белгородская область', 'Брянская область',
        'Бурятия', 'Владимирская область', 'Волгоградская область', 'Вологодская область',
        'Воронежская область', 'Дагестан', 'Еврейская АО', 'Забайкальский край',
        'Ивановская область', 'Ингушетия', 'Иркутская область', 'Кабардино-Балкария',
        'Калининградская область', 'Калмыкия', 'Калужская область', 'Камчатский край',
        'Карачаево-Черкесия', 'Карелия', 'Кемеровская область', 'Кировская область',
        'Коми', 'Костромская область', 'Краснодарский край', 'Красноярский край',
        'Курганская область', 'Курская область', 'Ленинградская область', 'Липецкая область',
        'Магаданская область', 'Марий Эл', 'Мордовия', 'Москва', 'Московская область',
        'Мурманская область', 'Ненецкий АО', 'Нижегородская область', 'Новгородская область',
        'Новосибирская область', 'Омская область', 'Оренбургская область', 'Орловская область',
        'Пензенская область', 'Пермский край', 'Приморский край', 'Псковская область',
        'Ростовская область', 'Рязанская область', 'Самарская область', 'Саратовская область',
        'Саха (Якутия)', 'Сахалинская область', 'Свердловская область', 'Северная Осетия',
        'Смоленская область', 'Ставропольский край', 'Тамбовская область', 'Татарстан',
        'Тверская область', 'Томская область', 'Тульская область', 'Тыва', 'Тюменская область',
        'Удмуртия', 'Ульяновская область', 'Хабаровский край', 'Хакасия', 'Ханты-Мансийский АО',
        'Челябинская область', 'Чечня', 'Чувашия', 'Чукотский АО', 'Ямало-Ненецкий АО',
        'Ярославская область'
    ].sort();


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        if (name === 'degree') {
            setFormData({
                ...formData,
                degree: value,
                course: ''
            });
        } else if (name === 'university') {
            // Если выбрано "Другое", сбрасываем кастомный вуз
            setFormData({
                ...formData,
                [name]: value,
                customUniversity: value === 'Другое' ? '' : formData.customUniversity
            });
        } else {
            setFormData({...formData, [name]: value});
        }
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({...formData, resume: e.target.files[0]});
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, consent: e.target.checked});
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setFormData({...formData, gender: e.target.value as 'мужской' | 'женский'});
        }
    };
    return (
        <>
            <S.FormContainer onSubmit={handleSubmit}>
                <S.FormGroup mobileOrder={1} desktopOrder={1}>
                    <S.Label htmlFor="lastName">Фамилия*</S.Label>
                    <S.InputField
                        type="text"
                        id="lastName"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </S.FormGroup>

                <S.FormGroup mobileOrder={1} desktopOrder={2}>
                    <S.Label htmlFor="firstName">Имя*</S.Label>
                    <S.InputField
                        type="text"
                        id="firstName"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </S.FormGroup>

                <S.FormGroup mobileOrder={3} desktopOrder={3}>
                    <S.Label htmlFor="patronymic">Отчество*</S.Label>
                    <S.InputField
                        type="text"
                        id="patronymic"
                        name="patronymic"
                        value={formData.patronymic}
                        onChange={handleChange}
                        required
                    />
                </S.FormGroup>

                <S.FormGroup mobileOrder={4} desktopOrder={6}>
                    <S.Label htmlFor="phone">Телефон*</S.Label>
                    <S.InputField
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </S.FormGroup>

                <S.FormGroup mobileOrder={5} desktopOrder={5}>
                    <S.Label htmlFor="email">Email*</S.Label>
                    <S.InputField
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </S.FormGroup>

                <S.FormGroup mobileOrder={3} desktopOrder={4}>
                    <S.Label>Пол*</S.Label>
                    <S.RadioGroup>
                        <S.RadioLabel>
                            <S.RadioInput
                                type="radio"
                                name="gender"
                                value="мужской"
                                checked={formData.gender === 'мужской'}
                                onChange={handleRadioChange}
                                required
                            />
                            <S.RadioText>Мужской</S.RadioText>
                        </S.RadioLabel>
                        <S.RadioLabel>
                            <S.RadioInput
                                type="radio"
                                name="gender"
                                value="женский"
                                checked={formData.gender === 'женский'}
                                onChange={handleRadioChange}
                                required
                            />
                            <S.RadioText>Женский</S.RadioText>
                        </S.RadioLabel>
                    </S.RadioGroup>
                </S.FormGroup>

                <S.FormGroup mobileOrder={3} desktopOrder={4}>
                    <S.Label htmlFor="birthPlace">Место рождения*</S.Label>
                    <S.SelectField
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Выберите регион</option>
                        {russianRegions.map((region) => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                    </S.SelectField>
                </S.FormGroup>

                <S.FormGroup mobileOrder={8} desktopOrder={6}>
                    <S.Label htmlFor="university">ВУЗ*</S.Label>
                    <S.SelectField
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Выберите ВУЗ</option>
                        {universitiesWithOther.map((university) => (
                            <option key={university} value={university}>{university}</option>
                        ))}
                    </S.SelectField>

                    {formData.university === 'Другое' && (
                        <S.CustomUniversityInput
                            type="text"
                            placeholder="Введите название вашего ВУЗа"
                            value={formData.customUniversity ? formData.customUniversity : ''}
                            onChange={(e) => setFormData({...formData, customUniversity: e.target.value})}
                            required
                        />
                    )}
                </S.FormGroup>

                <S.FormGroup mobileOrder={8} desktopOrder={8}>
                    <S.Label htmlFor="course">Курс*</S.Label>
                    <S.SelectField
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        disabled={!formData.degree}
                    >
                        {yearOptions[formData.degree as keyof typeof yearOptions]?.map((course) => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                    </S.SelectField>
                </S.FormGroup>
                <S.FormGroup mobileOrder={7} desktopOrder={7}>
                    <S.Label htmlFor="degree">Степень обучения*</S.Label>
                    <S.SelectField
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Выберите степень</option>
                        <option value="бакалавриат">Бакалавриат</option>
                        <option value="магистратура">Магистратура</option>
                        <option value="аспирантура">Аспирантура</option>
                    </S.SelectField>
                </S.FormGroup>

                <S.FormGroup mobileOrder={9} desktopOrder={9}>
                    <S.Label htmlFor="specialty">Специальность*</S.Label>
                    <S.InputField
                        type="text"
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                    />
                </S.FormGroup>

                <S.FormGroup mobileOrder={10} desktopOrder={10}>
                    <S.Label htmlFor="resume">Резюме</S.Label>
                    <S.FileInputContainer>
                        <S.FileInput
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                        />
                        <S.FileInputLabel htmlFor="resume">
                            {formData.resume ? formData.resume.name : 'Прикрепить файл'}
                        </S.FileInputLabel>
                    </S.FileInputContainer>
                </S.FormGroup>

                <S.ConsentGroup mobileOrder={11} desktopOrder={11}>
                    <S.CheckboxInput
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <S.ConsentLabel htmlFor="consent">
                        Соглашаюсь на обработку персональных данных на {' '}
                        <S.DownloadLinkPolicy
                            href={data_processing}
                            download="Согласие_на_обработку_персональных_данных.pdf"
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            условиях политики
                        </S.DownloadLinkPolicy>{' '}*
                    </S.ConsentLabel>

                </S.ConsentGroup>
                <S.ConsentGroup mobileOrder={12} desktopOrder={12}>
                    <FormFooter
                        formData={formData}
                        setFormData={setFormData}
                    />
                </S.ConsentGroup>
            </S.FormContainer>
        </>
    );
};

