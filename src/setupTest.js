import Enzime from "enzime";
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzime-to-json';

Enzime.configure({adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
