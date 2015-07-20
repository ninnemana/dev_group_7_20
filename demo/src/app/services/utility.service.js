class UtilityService {
	isUndefinedOrNull (val) {
		if (val === undefined) {
			return true;
		} else if (val === null) {
			return true;
		}
		return false;
	}
}

export default UtilityService;
