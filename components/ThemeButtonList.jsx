import LabeledLinkButton from './LabeledLinkButton';
import Winter from '../public/winter.svg';
import Spring from '../public/spring.svg';
import Summer from '../public/summer.svg';
import Fall from '../public/fall.svg';

export default function ThemeButtonList() {
  return (
    <>
      <LabeledLinkButton target="winter" className="themes">
        <Winter />
      </LabeledLinkButton>
      <LabeledLinkButton target="spring" className="themes">
        <Spring />
      </LabeledLinkButton>
      <LabeledLinkButton target="summer" className="themes">
        <Summer />
      </LabeledLinkButton>
      <LabeledLinkButton target="fall" className="themes">
        <Fall />
      </LabeledLinkButton>
    </>
  );
}
