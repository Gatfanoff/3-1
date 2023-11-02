export default function healthStatus (data) {
    let condition;
    if(data.health > 50) {
        condition = "healthy";
    } else if (data.health >= 15) {
        condition = "wounded"
    } else {
        condition = "critical"
    }
    return condition;
}