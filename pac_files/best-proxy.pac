function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:5101",
        "SOCKS 45.74.31.50:21285",
        "SOCKS 141.147.109.224:1080",
        "SOCKS 185.204.170.179:1109",
        "SOCKS 158.58.134.65:10080",
        "SOCKS 81.236.184.63:1080",
        "SOCKS 45.74.31.42:4233",
        "SOCKS 194.163.174.78:1085",
        "SOCKS 58.187.104.62:1088",
        "SOCKS 45.74.31.30:6442",
        "SOCKS 195.114.7.6:1080",
        "SOCKS 45.74.31.30:5131",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 45.74.31.42:19255",
        "SOCKS 45.74.31.50:8809",
        "SOCKS 45.74.31.30:8022",
        "SOCKS 45.74.31.42:12751",
        "SOCKS 146.56.158.84:22222",
        "SOCKS 45.74.31.40:21749",
        "SOCKS 91.215.226.195:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}