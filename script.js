let userModel = [];
function fakeCreate(obj) {
    return new Promise((data, error) => {
        if (!obj)
            error(new Error('you must enter a user !'));
        else {
            if (!obj.username)
                error(new Error('username is required !'));
            userModel.push(obj);
            data(userModel);
        }
    })
}
//Old way : resolve a prmoise with then and catch 
function main_1() {
    fakeCreate({ username: 'john doe ', tele: '123456789' })
        .then(user => {
            console.log({ main1: user });
        }).catch(error => {
            console.log({ main1: error })
        })
}
// New way resolve a promise with async await 
async function main_2() {
    try {
        let newUser = await fakeCreate({ username: 'kareem', tele: '987654321' });
        console.log({ main2: newUser });
    } catch (error) {
        console.log({ main2: error })
    }
}

main_1();
main_2();
