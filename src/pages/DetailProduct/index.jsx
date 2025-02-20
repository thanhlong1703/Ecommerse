import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import Button from '@components/Button/Button';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import AccordionMenu from '@components/AccordionMenu';
import Information from '@/pages/DetailProduct/components/Information';
import ReviewProduct from '@/pages/DetailProduct/components/Review';
import Footer from '@components/Footer/Footer';
import SlickCommon from '@components/SlickCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import { getDetailProduct, getRelatedProduct } from '@/apis/service';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import LoadingCommon from '@components/LoadingCommon';
import { ToastContext } from '@/contexts/ToastProvider';
import { handleAddProductToCart } from '@/utils/helper';
import { SideBarContext } from '@/contexts/SideBarProvider';

const logoSummary = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
    alt: 'visa'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg',
    alt: 'mastercard'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg',
    alt: 'paypal'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg',
    alt: 'american-express'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Maestro_2016.svg',
    alt: 'maestro'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
    alt: 'bitcoin'
  }
];
const dataAccordionMenu = [
  {
    id: 1,
    titleMenu: 'ADDITIONAL INFORMATION',
    content: <Information />
  },
  {
    id: 2,
    titleMenu: 'REVIEW (0)',
    content: <ReviewProduct />
  }
];

function DetailProduct() {
  const {
    container,
    navigateSection,
    boxContent,
    boxImg,
    boxDetail,
    priceItem,
    descriptionItem,
    boxSize,
    boxSelectSize,
    sizeItem,
    boxFncAdd,
    fncCout,
    boxBtn,
    boxOr,
    line,
    boxFncTick,
    tick,
    boxSummary,
    titleSummary,
    safe,
    paymentIcons,
    boxIcons,
    secureText,
    boxInfo,
    btnClear,
    active,
    boxAccordionMenu,
    loading,
    boxRelate,
    activeDisabledBtn,
    emptyData
  } = styles;
  const { userId, setType, setIsOpen, handleGetListCart } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [countQuantity, setCountQuantity] = useState(1);
  const [menuSelected, setMenuSelected] = useState(1);
  const [sizeSelected, setSizeSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const [data, setData] = useState();
  const [relatedData, setRelatedData] = useState([]);
  const param = useParams();
  const navigate = useNavigate();

  const handleReturnToShop = () => {
    navigate('/shop');
  };

  const fetchDataDetail = async (id) => {
    setIsLoading(true);
    try {
      const data = await getDetailProduct(id);

      setData(data);
      setIsLoading(false);
    } catch (error) {
      toast.error('Error fetching detail product');
      setIsLoading(false);
    }
  };

  const fetchDataRelated = async (id) => {
    setIsLoading(true);
    try {
      const data = await getRelatedProduct(id);

      setRelatedData(data);
      setIsLoading(false);
    } catch (error) {
      toast.error('Error fetching related product');
      setIsLoading(false);
    }
  };

  const handleSetMenuSelected = (id) => {
    if (menuSelected !== id) {
      setMenuSelected(id);
    } else {
      setMenuSelected(0);
    }
  };

  const handleSelectedSize = (size) => {
    setSizeSelected(size);
  };

  const handleClearSizeSeleted = () => {
    setSizeSelected('');
  };

  const handleAddToCart = () => {
    handleAddProductToCart(
      userId,
      setIsOpen,
      setType,
      toast,
      sizeSelected,
      param.id,
      countQuantity,
      setIsLoadingAdd,
      handleGetListCart
    );
  };

  const handleRenderZoomImage = (src) => {
    return (
      <ReactImageMagnifier
        srcPreview={src}
        srcOriginal={src}
        width={295}
        height={350}
      />
    );
  };

  const handleCountQuanity = (action) => {
    setCountQuantity((prev) => {
      if (action === 'reduce') return Math.max(1, prev - 1);
      if (action === 'increase') return prev + 1;
      return 1;
    });
  };

  useEffect(() => {
    if (param.id) {
      fetchDataDetail(param.id);
      fetchDataRelated(param.id);
    }
  }, [param]);

  return (
    <div>
      <Header />
      <div className={container}>
        <MainLayout>
          <div className={navigateSection}>
            <div style={{ display: 'flex', gap: 5 }}>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  navigate('/');
                }}
              >
                Home
              </div>
              <div> &gt; </div>
              <div style={{ cursor: 'pointer' }} onClick={handleReturnToShop}>
                Men
              </div>
            </div>
            <div style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
              &lt; Return to previous page
            </div>
          </div>
          {isLoading ? (
            <div className={loading}>
              <LoadingCommon />
            </div>
          ) : (
            <>
              {!data ? (
                <div className={emptyData}>
                  <p>No Result</p>
                  <Button
                    content={'Back to our shop'}
                    onClick={handleReturnToShop}
                  />
                </div>
              ) : (
                <div className={boxContent}>
                  <div className={boxImg}>
                    {data.images.map((item) => handleRenderZoomImage(item))}
                  </div>
                  <div className={boxDetail}>
                    <h1>{data.name}</h1>
                    <div className={priceItem}>${data.price}</div>
                    <div className={descriptionItem}>{data.description}</div>
                    <div className={boxSize}>
                      <div>Size {sizeSelected}</div>
                      <div className={boxSelectSize}>
                        {data?.size.map((itemSize, index) => {
                          return (
                            <div
                              className={classNames(sizeItem, {
                                [active]: sizeSelected === itemSize.name
                              })}
                              key={index}
                              onClick={() => handleSelectedSize(itemSize.name)}
                            >
                              {itemSize.name}
                            </div>
                          );
                        })}
                      </div>
                      {sizeSelected && (
                        <div
                          className={btnClear}
                          onClick={handleClearSizeSeleted}
                        >
                          Clear
                        </div>
                      )}
                    </div>
                    <div className={boxFncAdd}>
                      <div className={fncCout}>
                        <div onClick={() => handleCountQuanity('reduce')}>
                          -
                        </div>
                        <input
                          value={countQuantity}
                          onChange={(e) => setCountQuantity(e.target.value)}
                          onBlur={() => {
                            if (countQuantity === '' || countQuantity < 1)
                              setCountQuantity(1);
                          }}
                        />
                        <div onClick={() => handleCountQuanity('increase')}>
                          +
                        </div>
                      </div>
                      <div className={boxBtn}>
                        <Button
                          onClick={handleAddToCart}
                          content={
                            isLoadingAdd ? <LoadingCommon /> : 'Add to cart'
                          }
                          customClassname={!sizeSelected && activeDisabledBtn}
                        />
                      </div>
                    </div>
                    <div className={boxOr}>
                      <div className={line} />
                      <div style={{ fontSize: '12px' }}>OR</div>
                      <div className={line} />
                    </div>
                    <div>
                      <Button
                        content={'Buy now'}
                        customClassname={!sizeSelected && activeDisabledBtn}
                      />
                    </div>
                    <div className={boxFncTick}>
                      <div className={tick}>
                        <FaRegHeart />
                      </div>
                      <div className={tick}>
                        <TfiReload />
                      </div>
                    </div>
                    <div className={boxSummary}>
                      <div className={titleSummary}>
                        GUARANTEED <span className={safe}>SAFE</span> CHECKOUT
                      </div>
                      <div className={paymentIcons}>
                        {logoSummary.map((item, index) => (
                          <div className={boxIcons} key={index}>
                            <img src={item.src} alt={item.alt} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className={secureText}>Your Payment is 100% Secure</p>
                    <div className={boxInfo}>
                      <div>
                        Brand: <span>Brand 03</span>
                      </div>
                      <div>
                        SKU: <span>87654</span>
                      </div>
                      <div>
                        Category: <span>Men</span>
                      </div>
                    </div>
                    <div className={boxAccordionMenu}>
                      {dataAccordionMenu.map((item, index) => (
                        <AccordionMenu
                          titleMenu={item.titleMenu}
                          contents={item.content}
                          key={index}
                          onClick={() => handleSetMenuSelected(item.id)}
                          isSelected={menuSelected === item.id}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          {relatedData.length ? (
            <>
              <div className={boxRelate}>
                <h2>Related products</h2>
                <SlickCommon data={relatedData} isProductItem showItem={4} />
              </div>
            </>
          ) : (
            <></>
          )}
        </MainLayout>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
