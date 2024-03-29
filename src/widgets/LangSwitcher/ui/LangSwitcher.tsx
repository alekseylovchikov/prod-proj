import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}
// TODO move to widgets
export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    try {
      await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <Button onClick={toggle} theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])}>
      {t(short ? 'shortLanguage' : 'language')}
    </Button>
  );
};
