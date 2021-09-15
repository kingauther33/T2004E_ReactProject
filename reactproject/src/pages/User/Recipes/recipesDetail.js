import React from 'react';
import styles from './recipesDetail.module.css';
import { Link } from 'react-router-dom';
import images from "../../../assets";

const RecipesDetail = () => {
    return (
        <div className={`${styles['heading-page']} ${styles['header-text']}`}>
            <section className={styles['page-heading']}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className={styles['img']} src={images.recipes.ci} alt='cover image'/>
                            <div className={styles['text-content']}>
                                <h3 className='text-uppercase mb-4 font-10x text-center'> Cách làm cheesecake  siêu dễ</h3>
                            </div>
                        </div>
                        <h5 className={styles['h5']}>Nguyên Liệu: </h5>
                        <div className={styles['li']}>
                            <ol>
                                <li>60g bánh quy</li>
                                <li>40g bơ lạt đã đun chảy</li>
                                <li>135g cream cheese</li>
                                <li>2/3 thìa cà phê vanilla</li>
                                <li>120g whipping cream</li>
                                <li>20g đường</li>
                                <li>Lá Gelatin</li>
                                <li>Khuôn bánh</li>
                            </ol>
                        </div>
                        <h5 className={styles['h5']}>Cách làm: </h5>
                        <div className={styles['li']}>
                            <ol>
                                <li>Ngâm lá gelatin trước trong vòng 15 phút</li>
                                <li>Dằm nát bánh quy và trộn với bơ đã chuẩn bị sẵn</li>
                                <li>Cho hỗn hợp vào khuôn bánh và ép xuống thật chặt để tạo đế bánh</li>
                                <li>Trộn đường cùng whipping cream rồi đánh cho đến khi hỗn hợp bông lên (bạn nào có máy thì đánh rất nhanh, nếu không đánh bằng tay cũng được nhưng sẽ hơi cực một chút nha!)</li>
                                <li>Tiếp tục trộn cream cheese và vanilla với nhau</li>
                                <li>Trộn hai hỗn hợp đã đánh lại với nhau rồi đánh thật nhẹ nhàng, lưu ý mọi người phải nhẹ tay để whipping cream không bị tách nướcTrộn hai hỗn hợp đã đánh lại với nhau rồi đánh thật nhẹ nhàng, lưu ý mọi người phải nhẹ tay để whipping cream không bị tách nước</li>
                                <li>Cho 1 muỗng canh gelatin vào hỗn hợp vừa trộn và đảo đều</li>
                                <li>Lót giấy nến vào khuôn bánh rồi cho hỗn hợp cream cheese vào</li>
                                <li>Để bánh trên ngăn đông trong vòng khoảng 3 tiếng</li>
                                <li>Trong lúc chờ bánh, mọi người có thể làm thêm sốt dâu. Chỉ cần thái nhỏ dâu bỏ vào tô, cho thêm chút đường, nước sôi và đem đi hâm trong lò vi sóng là xong</li>
                            </ol>
                        </div>
                        <h5 className={styles['h5']}>Các bạn có thể xem kĩ các thao tác tại đây nha: </h5>
                        <iframe width="560" height="515" src="https://www.youtube.com/embed/5blTXYJQfCw"/>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecipesDetail;
