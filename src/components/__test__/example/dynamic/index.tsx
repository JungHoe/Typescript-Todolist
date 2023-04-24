import React, { useState } from "react";

interface DynamicPageProps {
  onSubmit: () => void;
}

const useForm = ({ initState }: { initState: { [key: string]: string } }) => {
  const [form, setForm] = useState(initState);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    setForm({ ...form, [key]: e.target.value });
  };

  return { form, onChangeForm };
};

const DynamicPage: React.FC<DynamicPageProps> = ({ onSubmit }) => {
  const { form, onChangeForm } = useForm({
    initState: { id: "", password: "" },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label>
          아이디
          <input
            name="id"
            data-testid="dynamic-page-id-input"
            placeholder="아이디를 입력하세요."
            value={form.id}
            onChange={onChangeForm}
          />
        </label>
        <label>
          비밀번호
          <input
            name="password"
            data-testid="dynamic-page-password-input"
            placeholder="6-15자의 영문 대소문자, 숫자 및 특수문자 조합"
            type="password"
            value={form.password}
            onChange={onChangeForm}
          />
        </label>
        <button
          data-testid="dynamic-page-submit-button"
          disabled={form.id === "" || form.password === ""}
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default DynamicPage;
