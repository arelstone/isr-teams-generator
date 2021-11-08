import { Category } from './Category';

export default {
  component: Category,
  title: 'Components/Category/Category',
}

export const AMCategory = () => <Category category="AM" />;
export const PROCategory = () => <Category category="PRO" />;
export const BothCategorues = () => <>
  <Category category="AM" />
  <Category category="PRO" />
</>;

