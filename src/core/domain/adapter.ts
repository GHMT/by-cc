export default interface IAdapter<From, To> {
	adapt(item: From): To;
	adaptBack(item: To): From;
}
