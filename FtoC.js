<script>
function convert(degree) {
    var x;
    if (degree == "F") {
        x = ("f").value -32 * 5 / 9;
        ("c").value = Math.round(x);
    } else {
        x = ("c").value * 9 / 5 + 32;
        ("f").value = Math.round(x);
    }
}
</script>


