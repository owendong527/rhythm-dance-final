<template>
  <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <h3 class="fw-bold mb-4 pt-3">結帳金額</h3>
    </div>
  </div>
  <div class="row flex-row-reverse justify-content-center pb-5">
    <div class="col-md-4">
      <div class="border p-4 mb-4">
        <div class="d-flex">
          <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
          <div class="w-100">
            <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">品項1</p>
              <p class="mb-0">NT$12,000</p>
            </div>
            <p class="mb-0 fw-bold">x1</p>
          </div>
        </div>
        <div class="d-flex mt-2">
          <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
          <div class="w-100">
            <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">品項2</p>
              <p class="mb-0">NT$12,000</p>
            </div>
            <p class="mb-0 fw-bold">x1</p>
          </div>
        </div>
        <table class="table mt-4 border-top border-bottom text-muted">
          <tbody>
            <tr>
              <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
              <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
            </tr>
            <tr>
              <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
              <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between mt-4">
          <p class="mb-0 h4 fw-bold">Total</p>
          <p class="mb-0 h4 fw-bold">NT$24,000</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="accordion" id="accordionExample">
        <div class="card rounded-0">
          <div class="card-header bg-white border-0
            py-3" id="headingOne" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <p class="mb-0 position-relative custom-checkout-label">123</p>
          </div>
          <div id="collapseOne" class="collapse show"
            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="card-body bg-light ps-5 py-4">
              <div class="mb-2">
                <label for="Lorem ipsum1" class="text-muted mb-0">456</label>
                <input type="text" class="form-control" id="Lorem ipsum1" placeholder="Lorem ipsum">
              </div>
              <div class="mb-0">
                <label for="Lorem ipsum2" class="text-muted mb-0">789</label>
                <input type="text" class="form-control" id="Lorem ipsum2" placeholder="Lorem ipsum">
              </div>
            </div>
          </div>
        </div>
        <div class="card rounded-0">
          <div class="card-header bg-white border-0
            py-3 collapsed" id="headingTwo" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <p class="mb-0 position-relative custom-checkout-label">abc</p>
          </div>
          <div id="collapseTwo" class="collapse"
            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="card-body bg-light ps-5 py-4">
              <div class="mb-2">
                <label for="Lorem ipsum1" class="text-muted mb-0">def</label>
                <input type="text" class="form-control" id="Lorem ipsum1" placeholder="Lorem ipsum">
              </div>
              <div class="mb-0">
                <label for="Lorem ipsum2" class="text-muted mb-0">ghi</label>
                <input type="text" class="form-control" id="Lorem ipsum2" placeholder="Lorem ipsum">
              </div>
            </div>
          </div>
        </div>
        <div class="card rounded-0">
          <div class="card-header bg-white border-0 py-3 collapsed"
            id="headingThree" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            <p class="mb-0 position-relative custom-checkout-label">III</p>
          </div>
          <div id="collapseThree" class="collapse"
            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="card-body bg-light ps-5 py-4">
              <div class="mb-2">
                <label for="Lorem ipsum1" class="text-muted mb-0">$$$</label>
                <input type="text" class="form-control" id="Lorem ipsum1" placeholder="Lorem ipsum">
              </div>
              <div class="mb-0">
                <label for="Lorem ipsum2" class="text-muted mb-0">###</label>
                <input type="text" class="form-control" id="Lorem ipsum2" placeholder="Lorem ipsum">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column-reverse flex-md-row
        mt-4 justify-content-between align-items-md-center align-items-end w-100">
        <a href="./product.html" class="text-dark mt-md-0 mt-3">
        <i class="fas fa-chevron-left me-2"></i> 繼續選課</a>
        <a href="./checkout-success.html" class="btn btn-dark py-3 px-7">確認送出</a>
      </div>
    </div>
  </div>
</div>
</template>
