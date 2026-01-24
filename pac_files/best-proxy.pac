function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.204:5182",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 36.255.98.153:19783",
        "SOCKS 62.60.131.195:5031",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 94.103.93.14:53943",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 150.241.115.108:47364",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 62.60.131.178:7222",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 103.127.133.132:1080",
        "SOCKS 36.255.98.178:7087",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 82.223.165.28:38245",
        "SOCKS 36.255.98.178:4504",
        "SOCKS 61.171.50.169:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}