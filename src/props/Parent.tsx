import { ChildAsFC } from './Child';

const Parent = () => {
	return <ChildAsFC color='red' onClick={() => console.log('clicked')}>asd</ChildAsFC>;
};

export default Parent;
