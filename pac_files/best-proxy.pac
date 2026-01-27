function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.161:4359",
        "SOCKS 36.255.98.160:4226",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 27.147.215.56:13457",
        "SOCKS 62.60.131.204:5882",
        "SOCKS 36.255.98.165:12053",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 62.60.131.204:8004",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 78.12.220.164:117",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 36.255.98.161:15569",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 36.255.98.161:13570",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 62.60.131.193:8460",
        "SOCKS 171.254.94.125:8088",
        "SOCKS 157.90.207.48:5122",
        "SOCKS 36.255.98.153:16464",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}