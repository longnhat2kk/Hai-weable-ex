// 
var $slider = $('.w-test .list');

if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function (slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).html(`<span>${currentSlide}</span><sup>/${slidesCount}</sup>`)
    };

    $slider.on('init', function (event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);

    });
    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (nextSlide !== 0) {
            $('.w-textboxSlider .slick-arrow.prev').addClass('move')
        } else {
            $('.w-textboxSlider .slick-arrow.prev').removeClass('move')
        }
        if (nextSlide === slick.$slides.length - 1) {
            $('.w-textboxSlider .slick-arrow.next').addClass('move')
        } else {
            $('.w-textboxSlider .slick-arrow.next').removeClass('move')
        }
    });

    $slider.slick({
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}

// next textInput

const MyFormComponent = () => {

  const ref_input2 = useRef();
  const ref_input3 = useRef();

  return (
    <>
      <TextInput
        placeholder="Input1"
        autoFocus={true}
        returnKeyType="next"
        onSubmitEditing={() => ref_input2.current.focus()}
      />
      <TextInput
        placeholder="Input2"
        returnKeyType="next"
        onSubmitEditing={() => ref_input3.current.focus()}
        ref={ref_input2}
      />
      <TextInput
        placeholder="Input3"
        ref={ref_input3}
      />
    </>
  )
}