const showUpgrade = times => (
  <div className="disable-mask">
    <WarningOutlined />
    <CloseCircleOutlined />
    <span>{upgradeMessage}</span>
    <WarningOutlined />
    <CloseCircleOutlined />
  </div>
);


.disable-me:hover:before {
  color: red;
  font-size: 30px;
  content: attr(data-text); /* here's the magic */
}

.disable-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 25;
  opacity: 0.5;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: transparent;
  &:hover {
    color: blue;
    font-size: 40px;
  }
}
