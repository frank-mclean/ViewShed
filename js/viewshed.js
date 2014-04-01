/**
	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var demSheds;
var shedSizingEnabled;

function ViewShedInit() {
	demSheds = {type: "normal", search: ["local"]};
	shedSizingEnabled = true;
}

function viewshed(evt) {
	var vs = document.getElementById("viewshed");
	vs.style.display = "block";
	vs.style.top = evt.screenPoint.y + "px";
	vs.style.left = evt.screenPoint.x - 50 + "px";
	vs.style.width = 254 * (Math.random() + 0.2) + "px";
	vs.style.height = 199 * (Math.random() + 0.2) + "px";
}

function removeShed() {
	var vs = document.getElementById("viewshed");
	vs.style.display = "none";
}

// My apologies if you did not come here on April 1st!