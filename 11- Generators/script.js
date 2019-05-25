function* WeaponGenerator() {
    yield "Katana";
    yield "Wakizaki";
    yield "Kusarigama";
}

for(let weapon of WeaponGenerator()) {
    assert(weapon !== undefined, weapon);
}