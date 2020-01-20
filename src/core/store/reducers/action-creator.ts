export default interface IActionCreator<P, A> {
	(params: P): A;
}
