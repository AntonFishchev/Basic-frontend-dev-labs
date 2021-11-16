"use strict";

let userName = null;

document.querySelectorAll("button").forEach(function (item) {
    item.addEventListener("click", () => {
        if (userName === null) {
            Swal.fire({
                title: "Введите имя",
                input: "text",
                showCancelButton: true,
                cancelButtonText: "Отмена",
                confirmButtonText: "Далее",
                allowOutsideClick: () => !Swal.isLoading(),
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        "Я это сделал, а " +
                            result.value +
                            " тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”"
                    );
                    userName = result.value;
                }
            });
        } else {
            Swal.fire(
                "Я это сделал, а " +
                    userName +
                    " тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”"
            );
        }
    });
});
