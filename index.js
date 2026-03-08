const BLOCKED = [4850,48732,48733,48734,48735,48736,48737,48738,48739,690019,70234,70235,70236,70237,70238,70251,70252,70253,70254,70255,70256,103132,776021,905433,905434,47660800,47660900,47661000,47662300,99001170,99006000,99007200,999001011];

module.exports = function noDrunkScreen(dispatch) {

    dispatch.hook('S_ABNORMALITY_BEGIN', '*', { order: -Infinity, filter: { 'fake': null } }, _ => {
		if(BLOCKED.includes(_.id))return false	
     });
	dispatch.hook('S_ABNORMALITY_REFRESH', '*', { order: -Infinity, filter: { 'fake': null } }, _ => {
		if(BLOCKED.includes(_.id))return false	
     });
}