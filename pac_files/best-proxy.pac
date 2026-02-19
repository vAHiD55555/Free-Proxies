function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.78.65.202:6688",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 13.59.97.103:313",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 163.5.128.20:14270",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 205.185.120.241:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}